import React, { useState } from "react";

const Post = () => {
  // Hook to handle the state of the post,
  // Initially edit mode is set to false, 
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = () => {
    // Save the updated post here

    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea defaultValue='Test Body' />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>Test Body</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
      <div>
        <h3>Comments</h3>
        <ul>
          <li>Comment1</li>
          <li>Comment2</li>
          <li>Comment3</li>
          <li>Comment4</li>
          <li>Comment5</li>          
        </ul>
      </div>
      <div>
        <button>Like</button>
        <p>Likes: 15</p>
      </div>
    </div>
  );
};

export default Post;

