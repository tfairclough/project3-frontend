import React from 'react'
import Login from './components/users/loginRegister';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/users/loginRegister';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      currentUser: {
        firstName: 'test',
        lastName: 'test',
        userName: 'test',
        password: 'test',
        email: 'test',
        location: 'test',
        friends: ['test'],
        img: 'test',
        timestamps: 'test'
      }
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
      <Router>
        <>
          <h1>Naptser Social app</h1>

          {/* Nav bar links to each React Route */}
          <nav>
            <Link to = "/">Log In</Link>  
            <Link to = "/feed">Feed</Link>
            <Link to = "/profile">Profile</Link>
          </nav>

          {/* Creating the React Paths to different pages */}
          <Route exact path="/" component = { () => <Login users={this.state.users} setUsers={this.setUsers}/>}/>
          <Route exact path = "/feed"/> 
          <Route exact path = "/profile"/> 

        </>
      </Router>
    )
  }
} 

