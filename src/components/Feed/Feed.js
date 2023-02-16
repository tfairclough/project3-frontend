import React, { useState, useEffect } from "react";
import { findMyPosts, findPosts } from "../users/api";
import Post from "../posts/Post";
import CreatePost from "../posts/CreatePost"

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  
  if (props.currentUser.id) {
    props.profilePage ? findMyPosts(props.currentUser.id)
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })     
    
    : findPosts()
      .then((response) => {
        setPosts(response.data.posts.map((post) => post._id));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    }

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((postId) => (
        <Post key={postId} 
              postId={postId}
              currentUser={props.currentUser} 
              updateCurrentUserFromDatabase={props.updateCurrentUserFromDatabase}
              profilePage={props.profilePage}/>                
      ))}
      {props.profilePage && <CreatePost currentUser={props.currentUser}/>}      

    </div>
  );
};

export default Feed;