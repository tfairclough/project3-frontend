import React, { useState } from "react";
import { editPost } from "../users/api";

const Post = () => {
  // Hook to handle the state of the post,
  // Initially edit mode is set to false, 
  const [editMode, setEditMode] = useState(false);

  // Hook to manage the value of the text area
  const [updatedPostBody, setUpdatedPostBody] = useState('Test Body');

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    setEditMode(false)
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
        <p>Likes: 15</p>
      </div>
    </div>
  );
};

export default Post;

