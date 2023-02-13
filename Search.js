
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
    handleSearchChange = (e) => {
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
  }

  // create a map for 

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
                        /* value = {this.value}
                        onChange = {this.handleSearchChange} *//>
                {/* <button onClick = {this.addToFriends}>Add to Friends List</button>  */}
            </div>
        )
        }
    }
    
    export default Search;

