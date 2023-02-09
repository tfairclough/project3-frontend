import React from 'react'
import Login from './components/users/loginRegiater';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    };
  }

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

