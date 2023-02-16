import React, { Component } from 'react';

class Results extends Component{
    constructor(props) {
        super(props);

        this.state = {
            friendId: '',
            searchResults: []
        }
    }
   
/*    onClick = (e) => {
    const user = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userName: this.props.userName
    }
    this.props.addToFriends(user)
   } */

   componentDidUpdate(prevProps) {
    if (prevProps.searchResults !== this.props.searchResults) {
      // searchResults has changed, update the component's state
      this.setState({ searchResults: this.props.searchResults });
    }
  }

   handleFriendId = (friendId) => {
    this.props.addToFriends(friendId)
    // this.updateFriendId(friendId)
    console.log('handle friend id', friendId)
    const { friendsList, addToFriendsList, removeFromFriendsList } = this.props;
    if (friendsList.includes(friendId)) {
      // friendId is already in the friendsList, so remove it
      removeFromFriendsList(friendId);
    } else {
      // friendId is not in the friendsList, so add it
      addToFriendsList(friendId);
    }
  };

  updateFriendId = (friend) => {
    this.props.addToFriends(friend)
  }

    render () {
         /* map searchedResults*/
     const usersArray = this.props.searchResults.map((item, index) => {
        const isFriend = this.props.friendsList.includes(item._id)
        return  <div key={index}>
                    <h3>First name: {item.firstName}</h3>
                    <h3>Last name: {item.lastName}</h3>
                    <h3>Username: {item.userName}</h3>
                <div>
                {isFriend ? (
  <button onClick={() => {
    /* this.props.addToFriends(item._id); */
    this.handleFriendId(item._id);
  }}>Remove friend</button>
) : (
  <button onClick={() => {
    // this.props.addToFriends(item._id);
    this.handleFriendId(item._id);
  }}>Add friend</button>
)}
            </div>
                 </div>
    })
        return (
           <div>
            {usersArray}
           </div>
        )
    }
}

export default Results;