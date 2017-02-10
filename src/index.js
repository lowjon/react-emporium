import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux'
import App from './components/App/App'
import Login from './components/Login/Login'
import Shop from './components/Shop/Shop'
import store from './store'

const reactNode = document.getElementById('root')

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      <Route path='/' component={ App }>
        <Login path='/login' component={ Login }/>
        <Shop path='/shop' component={ Shop }/>
      </Route>
    </Router>
  </Provider>
  , reactNode )
