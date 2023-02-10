import React from 'react'
import Login from './components/users/loginRegister';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    };
  }

  // method to take all users returned from the database from the getAllUsers api and add them to the users state
  setUsers = (users) => {
    this.setState({
      users: users,
    })
  }

  render() {
    return(
      <>
        <h1>Social app</h1>
        <Login  users={this.state.users}
                    setUsers={this.setUsers}/>
      </>
    )
  }
} 

