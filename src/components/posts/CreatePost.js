import { useState } from 'react';
import { addPost } from "../users/api";

// Define the CreatePost component
<<<<<<< HEAD
const CreatePost = ( {currentUser} ) => {
=======
const CreatePost = () => {
>>>>>>> 6e394ff571340488c6f599c6f2c09ef3f77d7ffc
  // Define the postContent state with the useState hook, and initialize it to an empty string
  const [postContent, setPostContent] = useState('');
  // Define the showForm state with the useState hook, and initialize it to false
  const [showForm, setShowForm] = useState(false);

  // Define the handlePostSubmit function to handle the form submission
  const handlePostSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Call the addPost function from the API module, passing in the postContent state
<<<<<<< HEAD
    console.log(currentUser.id)
    addPost(currentUser.id, postContent)
=======
    addPost(postContent)
>>>>>>> 6e394ff571340488c6f599c6f2c09ef3f77d7ffc
      .then((response) => {
        console.log('Post created successfully:', response.data);        
        setShowForm(false); // Hide the form after the post is created        
        setPostContent(''); // Reset postContent state to an empty string
      })
      .catch((error) => {
        console.error('Failed to create post:', error);
      });
  };

  // Render the component UI
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Create Post</button>
      {showForm && ( // Show the form only if showForm state is true
        <form onSubmit={handlePostSubmit}>
          <label>
            Post Content:
            <input type="text" value={postContent} onChange={(e) => setPostContent(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CreatePost;