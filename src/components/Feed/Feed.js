import React, { useState, useEffect } from "react";
import { findMyPosts } from "../users/api";
import Post from "../posts/Post";
import CreatePost from "../posts/CreatePost"

const Feed = ( {currentUser, profilePage} ) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    findMyPosts(currentUser.id)
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
      {posts.map((postId) => (
        <Post key={postId} postId={postId} />                
      ))}
      <CreatePost currentUser={currentUser}/>      

    </div>
  );
};

export default Feed;