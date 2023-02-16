import React, { useState, useEffect } from "react";
import { findPosts } from "../users/api";
import Post from "../posts/Post";
import CreatePost from "../posts/CreatePost"
<<<<<<< HEAD
const Feed = ( {currentUser} ) => {
=======
const Feed = () => {
>>>>>>> 6e394ff571340488c6f599c6f2c09ef3f77d7ffc
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

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((post) => (
        <Post key={post._id} post={post} />                
      ))}
<<<<<<< HEAD
      <CreatePost currentUser={currentUser}/>      
=======
      <CreatePost/>
>>>>>>> 6e394ff571340488c6f599c6f2c09ef3f77d7ffc
    </div>
  );
};

export default Feed;