import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from './pages/Home'
import About from './pages/About'
import GlobalStyle from './utils/styles/global'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
    <GlobalStyle />
  </div>
)

export default App
