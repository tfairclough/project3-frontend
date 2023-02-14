import React from 'react';
import profilePic from '../../assets/profilePic.jpg'
import EditIcon from '../../assets/pencil_icon.png'


const UserBio = (props) => {
  return (
    <div>
      <img src={profilePic}/>
      <img className='pencil-icon' src={EditIcon} onClick={props.editCountryDetails} width={50}/>
      <p>{props.currentUser.firstName}</p>
      <p>{props.currentUser.lastName}</p>
      <p>{props.currentUser.email}</p>
    </div>
  )
}

export default UserBio