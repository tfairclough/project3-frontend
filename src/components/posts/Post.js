import React, { useState } from "react";
import { editPost } from "../users/api";

const Post = ({ post }) => {
  // Hook to handle the state of the post,
  // Initially edit mode is set to false, 
  const [editMode, setEditMode] = useState(false);

  // Hook to manage the value of the text area
  const [updatedPostBody, setUpdatedPostBody] = useState(post.content);

  const handleEditClick = () => {
    setEditMode(true)
  };

  const handleSaveClick = () => {
    editPost(post._id, updatedPostBody)
    .then(() => {
      console.log("Post saved successfully");
      setEditMode(false);
    })
    .catch((error) => {
      console.error("Error editing post:", error);
    });
  };

  const handleTextareaChange = (event) => {
    setUpdatedPostBody(event.target.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <textarea value={updatedPostBody} onChange={handleTextareaChange} />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>{updatedPostBody}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
      <div>
        <button>Like</button>
        <p>Likes: {post.likes.length}</p>
      </div>
    </div>
  );
};

export default Post;

