import React, {Component, Fragment} from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/layout/Layout'
import GlobalStyle from './utils/styles/global'

class App extends Component {
  
  state = {
    showMobileSide: false,
  }

  render() {
    const {showMobileSide} = this.state

    return (
      <Layout
        showMobileSide={showMobileSide}
        render={{
          main: this.renderMain,
          top: this.renderTop,
          side: this.renderSide,
        }}
      />
    )
  }

  renderTop = () => {

    return (
      <div>
        Top bar here
      </div>
    )
  }

  renderSide = () => {

    return (
      <div>
        Side bar here
      </div>
    )
  }

  renderMain = () => {

    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App
