import React from 'react';

const FriendsList = (props) => {
  return (
    <div>
      <p>{props.currentUser.firstName}</p>
      <p>{props.currentUser.friends[0].firstName}</p>
    </div>
  )
}

export default FriendsList