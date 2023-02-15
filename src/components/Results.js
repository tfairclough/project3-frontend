import React, { Component } from 'react';

class Results extends Component{
   
/*    onClick = (e) => {
    const user = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userName: this.props.userName
    }
    this.props.addToFriends(user)
   } */

   handleFriendId = (friendId) => {
   this.props.addToFriends(friendId)

   }
    render () {
         /* map searchedResults*/
     const usersArray = this.props.searchResults.map((item, index) => {
        return  <div key={index}>
                <h3>First name: {item.firstName}</h3>
                <h3>Last name: {item.lastName}</h3>
                <h3>Username: {item.userName}</h3>
                <div>
                <button onClick={() => {this.handleFriendId(item._id)}}>Add to friends</button>
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