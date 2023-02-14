import React from 'react';
import profilePic from '../../assets/profilePic.jpg'
import EditIcon from '../../assets/pencil_icon.png'


const UserBio = (props) => {
  return (
    <div>
      <img src={profilePic}/>
      <img className='pencil-icon' src={EditIcon} onClick={props.editCountryDetails} width={50}/>
      <p>FirstName: {props.currentUser.firstName}</p>
      <p>LastName: {props.currentUser.lastName}</p>
      <p>UserName: {props.currentUser.userName}</p>
      <p>Email: {props.currentUser.email}</p>
      <p>Location: {props.currentUser.location}</p>
    </div>
  )
}

export default UserBio