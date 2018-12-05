import App from './App'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import client from './utils/stateLink'
import theme from './config/theme'

hydrate(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
