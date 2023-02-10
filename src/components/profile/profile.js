import React from 'react'
import FriendsList from './friendsList'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return( 
      <>
        <p>Hello</p>
        <FriendsList currentUser={this.props.currentUser}/>
      </>
    )
  }
}