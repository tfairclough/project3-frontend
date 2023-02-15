import React from 'react';

const FriendRow = (props) => {
  return (
    <div>
      <p>{props.friendDetails.firstName}</p>
      <p>{props.friendDetails.lastName}</p>
    </div>
  )
}

export default FriendRow