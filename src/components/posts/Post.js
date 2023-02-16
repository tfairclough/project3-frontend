import React, { useState } from "react";
import { editPost, addLike } from "../users/api";

const Post = ({ post }) => {
  // Define a state variable (editMode) using the useState hook, initially set to false
  const [editMode, setEditMode] = useState(false);

  // Define a state variable (updatedPostBody) using the useState hook, initialized with the content of the post
  const [updatedPostBody, setUpdatedPostBody] = useState(post.content);

  // Function to handle the click of the "Edit" button
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Function to handle the click of the "Save" button
  const handleSaveClick = () => {
    // Call the editPost API with the post ID and updated post content, and set editMode to false when the promise resolves
    editPost(post._id, updatedPostBody)
      .then(() => {
        console.log("Post saved successfully");
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error editing post:", error);
      });
  };

  // Function to handle changes to the textarea
  const handleTextareaChange = (event) => {
    // Update the updatedPostBody state with the new value
    setUpdatedPostBody(event.target.value);
  };

  // Function to handle the click of the "Like" button
  const handleLikeButtonClick = (e) => {
    // Call the addLike API with the post ID
    addLike(post._id);
  };

  // Render the component UI
  return (
    <div>
      {editMode ? (
        <div>
          <textarea value={updatedPostBody} onChange={handleTextareaChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>{post.content}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
      <div>
        <button onClick={handleLikeButtonClick}>Like</button>
        <p>Likes: {post.likes}</p>
      </div>
    </div>
  );
};

export default Post;