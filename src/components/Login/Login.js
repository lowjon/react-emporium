import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { login } from '../../ducks/userDuck'
import './Login.css'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: ''
      , email: ''
    }
  }

  handleChange( field, event ) {
    this.setState({
      [ field ]: event.target.value
    })

  }

  login(event){
    event.preventDefault()
    this.props.dispatch( login({
      username: this.state.username
      , email: this.state.email
    }))
    browserHistory.push( '/shop' )
  }
  render() {
    return (
      <div>
        <form className="login-form">
          <input
            onChange={ this.handleChange.bind( this, 'username')}
            placeholder="Username"
            type="text"
            value={ this.state.email }
          />
          <input
            onChange={ this.handleChange.bind( this, 'email')}
            placeholder="Email"
            type="text"
            value={ this.state.email }
          />
          <button
            onClick={ this.login.bind(this)}
            type="submit"
            >
              Login
          </button>
        </form>
      </div>
    )
  }


}
export default connect( state => ({ user: state.user }))( Login )
