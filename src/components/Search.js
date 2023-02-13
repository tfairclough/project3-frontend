import { getSearchedUsers } from '././api'
import React from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            //this is already being passed down from app - will also need to pass down currentUser
            allUsers: [], 
            filteredUsers: [],
            friends: [],
            newUserValue: ''
          }
    }

render() {

    //takes input and matches it to api users
    // this goes to the backend
/*     handleSearchChange = (e) => {
        const textValue = e.target.value;
        const filteredUsersList = this.state.users.filter(function(user){
            //need to search for users by firstName lastName or username
        return user.firstName.toLowerCase().includes(textValue.toLowerCase())
        })
    //allow user to input text
        this.setState({
        searchValue: textValue,
        filteredUsers: filteredUsersList 
    })
  } */

  handleFriendsSubmit = (e) => {
    e.preventDefault();
    // forms the body to send to backend
    const userDetails = {
      user: {
        userName: this.state.userName
      }
    };
    console.log('Sending user details:', (userDetails));
    loginUser(userDetails)
  .then((response) => {
   getSearchedUsers(this.state.filteredUsers)
  })
  .catch((error) => {
    console.error(error);
  });

  };


  /* // adds user's choices to friends state 
        addToFriends = (user) => {
        this.setState({
            friends: [...this.state.friends, user]
        })
        } */

        return (
            <div>
                <label>Search for friends</label>
                <input type = 'text'
                        placeholder = "Search for friends"
                         value = {this.value}
                        onChange = {e => this.setState({ filteredUsers: [...this.state.filteredUsers, e.target.value]})} />
                <button type='submit' onSubmit={this.handleFriendsSubmit}>Add to Friends List</button> 
            </div>
        )
        }
    }
    
    export default Search;

