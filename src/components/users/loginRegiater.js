import React from 'react'
import { getAllUsers } from './api'


export default class Login extends React.Component {
  componentDidMount() {
    getAllUsers()
        .then((response) => {
            this.props.setUsers(response.data.users)
        })
        .catch((err) => {
            console.log(err)
        })
  }

  render() {
    return(
      <>
        <form>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </form>
      </>
    )
  }
} 