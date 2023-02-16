import React, { useState } from "react";
import { editPost, addLike, findPost } from "../users/api";

const Post = (props) => {
  // Define a state variable (editMode) using the useState hook, initially set to false
  const [editMode, setEditMode] = useState(false);
  const [postData, setPost] = useState({post: {
                                          comments:[],
                                          likes: '',
                                          content:''  
  }});
  
  findPost(props.postId)
  .then(result => result.data)
  .then(data => setPost(data))

  // Define a state variable (updatedPostBody) using the useState hook, initialized with the content of the post
  const [updatedPostBody, setUpdatedPostBody] = useState(postData.post.content);


  // Function to handle the click of the "Edit" button
  const handleEditClick = () => {
    setEditMode(true);
  };

  // Function to handle the click of the "Save" button
  const handleSaveClick = () => {
    // Call the editPost API with the post ID and updated post content, and set editMode to false when the promise resolves
    editPost(postData.post._id, updatedPostBody)
      .then(() => {
        console.log("Post saved successfully");
        setEditMode(false);
        findPost(props.postId)
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
    addLike(postData.post._id);
    findPost(props.postId)
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
          <p>{postData.post.content}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
      <div>
        <button onClick={handleLikeButtonClick}>Like</button>
        <p>Likes: {postData.post.likes}</p>
      </div>
    </div>
  );
};

export default Post;