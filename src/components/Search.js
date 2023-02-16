import { getSearchedUsers } from './users/api'
import { addFriends } from './users/api'
import { removeFriends } from './users/api';
import React from 'react';
import Results from './Results'

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '', 
            searchResults:[],
            friendId: '',
            friendsList: this.props.currentUser.friends
          }
    }
   // takes input and matches it to api users
   // backend is where we filter input to match db
    handleSearchChange = (e) => {
        const textValue = e.target.value
        console.log(textValue)
        getSearchedUsers(textValue)
        .then((response) => {
        console.log(response)
        this.setState({
            searchResults: response.data.users
        })
        })
        .catch((error) => {
            console.error(error);
        });
        this.setState({
            searchValue: textValue 
        })
  }

/*    addToFriends = (friendId) => {
        this.setState({
            friendId: friendId
        })
  }; */ 

  addToFriendsList = () => {
    const friendsId = {
        friendId: this.state.friendId
    }
    console.log(this.props.currentUser, 'current user')
    addFriends(this.props.currentUser.id, friendsId)
    .then((res) => {
        console.log(res)
        this.props.updateCurrentUserFromDatabase()
    })
  }

  removeFromFriendsList = () => {
    const friendsId = {
        friendId: this.state.friendId
    }
    console.log(this.props.currentUser, 'current user')
    removeFriends(this.props.currentUser.id, friendsId)
    .then((res) => {
        console.log(res)
        this.props.updateCurrentUserFromDatabase()
    })
  }


/*   componentDidUpdate (prevProps, prevState) {
    console.log(this.state.friendId)
    console.log(this.props.currentUser.id)
    if (prevState.friendId !== this.state.friendId) {
        addFriends(this.props.currentUser.id, this.state.friendId)
    } 
  } */

render() {
        return (
            <div>
                <label>Search for friends</label>
                <input type = 'search'
                        placeholder = "Search for friends"
                        value = {this.state.searchValue}
                        onChange = {this.handleSearchChange}
                         />
                <Results searchResults={this.state.searchResults}
                         /* addToFriends={this.addToFriends} */
                         addToFriendsList={this.addToFriendsList}
                         removeFromFriendsList={this.removeFromFriendsList}
                         friendsList={this.state.friendsList}
                        /* friendId={this.state.addFriends} *//>
            </div>
        )
        }
    }
    
    export default Search;

