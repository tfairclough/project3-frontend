import React from 'react'
import Feed from '../Feed/Feed'
import FriendRow from './FriendRow'
import UserBio from './UserBio'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const allFriends = this.props.currentUser.friends.map(
      (friendDetails, index) => <FriendRow friendDetails = {friendDetails} 
                                           key = {index}/>)

    return( 
      <>
        <UserBio currentUser={this.props.currentUser} 
                 updateCurrentUserFromDatabase={this.props.updateCurrentUserFromDatabase}/>
        {allFriends}
        <Feed currentUser={this.props.currentUser} profilePage={true}/>
      </>
    )
  }
}
