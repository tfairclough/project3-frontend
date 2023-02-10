import React from 'react'
import { getAllUsers } from './api'
import { createNewUser } from './api'
import { userSeedData } from '../../seedData'
import { registerAllUsers } from './api'


export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dummyUsers: userSeedData
  }
  }

  componentDidMount() {
    // call the get all users api that we imported from api.js
    getAllUsers()
        .then((response) => {
            this.props.setUsers(response.data.users)
        })
        .catch((err) => {
            console.log(err)
        })
  }

  addDummyUsers = (e) => {
    e.preventDefault()
    console.log('button working')
    // call the create a users api that we imported from api.js and pass the createUser state
    registerAllUsers(this.state.dummyUsers)
      .then((res) => {
        console.log('user created')
      })
      .catch((err) => {
          console.log(err)
      })

  }

//   handleCreateRecipe = event => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newUser = Object.fromEntries(formData);
//     const recipeIndex = this.state.myRecipes.findIndex(recipe => recipe.rname === newRecipe.rname);
//     if (recipeIndex === -1) {
//         this.setState(prevState => {
//             return { myRecipes: [...prevState.myRecipes, newRecipe] }
//         });
//         event.target.reset();
//     } else {
//         const myRecipes = [...this.state.myRecipes];
//         myRecipes[recipeIndex] = newRecipe;
//         this.setState({ myRecipes });
//         event.target.reset();
//     }
// }

  render() {
    return(
      <>
      <button onClick={this.addDummyUsers}>add seed users</button>
        <form>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <button onClick={this.createUser}>Login</button>
        </form>
      </>
    )
  }
} 