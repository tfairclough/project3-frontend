import React from 'react';
import profilePic from '../../assets/profilePic.jpg'


const UserBio = (props) => {
  return (
    <div>
      <img src={profilePic}/>
      <p>{props.currentUser.firstName}</p>
    </div>
  )
}

export default UserBio