import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  body {
    background-color: #f5f5f5;
  }
`