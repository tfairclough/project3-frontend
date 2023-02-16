import React, { useState, useEffect } from "react";
import FriendRow from './FriendRow';
import UserBio from './UserBio';
import { findPosts } from "../users/api";
import Post from "../posts/Post";
import CreatePost from "../posts/CreatePost"

const Profile = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    findPosts()
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [posts]);

  const allFriends = this.props.currentUser.friends.map(
    (friendDetails, index) => <FriendRow friendDetails = {friendDetails} 
                                          key = {index}/>)

    return( 
      <>
        <UserBio currentUser={this.props.currentUser} 
                 updateCurrentUserFromDatabase={this.props.updateCurrentUserFromDatabase}/>
        {allFriends}
        <div>
          <h1>My Blog Posts</h1>
          {posts.map((post) => (
            <Post key={post._id} post={post} />                
          ))}
          <CreatePost/>
        </div>
      </>
    )
  }
  export default Profile