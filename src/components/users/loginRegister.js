import React from 'react'
import { getAllUsers } from './api'
import { createNewUser } from './api'
import { userSeedData } from '../../seedData'
import { registerAllUsers } from './api'
import { loginUser } from './api'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyUsers: userSeedData,
      userName: '',
      password: '',
      isLoginForm: true,
    };
  }

  // method to add dummy users from seedData
  addDummyUsers = (e) => {
    e.preventDefault()
    console.log('button working')
    // call the create a users api that we imported from api.js and pass the createUser state
    registerAllUsers(this.state.dummyUsers)
      .then(() => {
        console.log('user created')
      })
      .catch((err) => {
          console.log(err)
      })

  }

  // Switches between login and register forms and updates the URL
  handleFormToggle = () => {
    this.setState(prevState => ({
      isLoginForm: !prevState.isLoginForm
    }), () => {
      const pageTitle = this.state.isLoginForm ? 'Login' : 'Register';
      window.history.pushState({}, pageTitle, `/${pageTitle.toLowerCase()}`);
    });
  }

  // Login method
  handleLoginSubmit = (e) => {
    e.preventDefault();
    // forms the body to send to backend
    const credentials = {
      user: {
        userName: this.state.userName,
        password: this.state.password
      }
    };
    console.log('Sending credentials:', (credentials));
    loginUser(credentials)
  .then((response) => {
    // sets token and updates URL after login
    const token = response.data.token;
    this.props.setToken(token);
    window.history.pushState({}, 'Feed', '/feed');
  })
  .catch((error) => {
    console.error(error);
  });

  };

  render() {
    return (
      <>
        {/* login/register page header section */}
        <header className='hero-image'>
          <h1 className="hero-h1">App Name</h1>
        </header>
        <div className='login-wrapper'>
          {/* If state isLoginForm = true then login form is displayed */}
          {this.state.isLoginForm ? (
            <>
              <button onClick={this.addDummyUsers} className="tmp-add-users">add seed users</button>
              <p className='not-member'>Not a member? <button onClick={this.handleFormToggle}>Sign up now</button></p>
              <form className='login-form' onSubmit={this.handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Username..."
                  onChange={e => this.setState({userName: e.target.value})} /><br />
                <input
                  type="password"
                  placeholder="Password..."
                  onChange={e => this.setState({password: e.target.value})} /><br />
                <button type='submit'>Login</button>
              </form>
            </>
            // if state isLoginForm = false then register form is displayed
          ) : (
            <>
              <p className='not-member'>Already a member? <button onClick={this.handleFormToggle}>Sign in</button></p>
              <div className='register-wrapper'>
                <form>
                  <input type="text" placeholder="First name..." />
                  <input type="text" placeholder="Last name..." /><br />
                  <input type="text" placeholder="Username..." />
                  <input type="email" placeholder="Email..." /><br />
                  <input type="password" placeholder="Password..." />
                  <input type="password" placeholder="Confirm password..." /><br />
                  <button onClick={this.createNewUser}>Register</button>
                </form>
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}



// belowe is the function version

// import React, { useState } from 'react'
// import { getAllUsers } from './api'
// import { createNewUser } from './api'
// import { userSeedData } from '../../seedData'
// import { registerAllUsers } from './api'
// import { PropTypes } from 'prop-types'
// import { loginUser } from './api'

// export default function Login({ setToken }) {
//   const [userName, setUserName] = useState();
//   const [password, setPassword] = useState();


//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const credentials = {
//       user: {
//       userName,
//       password
//     }
//     };
//     console.log('Sending credentials:', (credentials));
//     loginUser(credentials)
//     .then((response) => {
//       const token = response.data.token;
//       setToken(token);
//           console.log(token)
//     })
    
//   };
  
//   return(
//     <>
//       <header className='hero-image'>
//          <h1 className="hero-h1">App Name</h1>
//        </header>
//       <div className='login-wrapper'>
// {/* //         <button onClick={this.addDummyUsers}>add seed users</button> */}
//          <p className='not-member'>Not a member? <a href='/'>Sign up now</a></p>
//          <form className='login-form' onSubmit={handleLoginSubmit}>
//             <input 
//                   type="text" 
//                   placeholder="Username..." 
//                   onChange={e => setUserName(e.target.value)}/>
//              <input 
//                   type="password" 
//                   placeholder="Password..."
//                   onChange={e => setPassword(e.target.value)} />
//             <button type='submit'>Login</button>
//         </form>
//       </div>
//        <div className='register-wrapper hidden'>
//         <form>
//              <input type="text" placeholder="First name..." />
//             <input type="text" placeholder="Last name..." />
//             <input type="text" placeholder="Username..." />
//              <input type="email" placeholder="Email..." />
//             <input type="password" placeholder="Password..." />
//              <input type="password" placeholder="Confirm password..." />
// {/* //             <button onClick={this.createUser}>Register</button> */}
//         </form>
//       </div>
//        </>
//   )
// }

// Login.ReactPropTypes = {
//   setToken: PropTypes.func.isRequired
// }
 // used with the function version
// // Specify that setToken is a function
// Login.propTypes = {
// setToken: PropTypes.func.isRequired
// }