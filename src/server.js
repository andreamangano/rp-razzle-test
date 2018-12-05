import App from './App'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import cookieParser from 'cookie-parser'
import { getDataFromTree, ApolloProvider } from 'react-apollo'
import theme from './config/theme'
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
import client from './utils/stateLink'

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(cookieParser())
  .get('/*', async(req, res) => {
    const context = {};

    if (context.url) {
      res.redirect(context.url);
    } else {

      const sheet = new ServerStyleSheet()
  
      const Root = () => (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <StaticRouter location={req.url} context={context}>
                  <App />
                </StaticRouter>
            </ThemeProvider>
        </ApolloProvider>
      )

      try {
        await getDataFromTree(<Root />)
      } catch (e) {
        console.log(e)
      }
  
      const markup = renderToString(
        sheet.collectStyles(<Root />)
      );

      // Call after the sheet.collectStyles
      const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();

      res.status(200).send(
        `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Welcome to Razzle</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
              ${styleTags}
          </head>
          <body>
              <div id="root">${markup}</div>
          </body>
      </html>`
      );
    }
  });

export default server;
