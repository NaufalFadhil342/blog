import React, { useEffect, useState } from 'react';
import classes from '../../App.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, Auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const postCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: {
        name: Auth.currentUser.displayName,
        id: Auth.currentUser.uid,
      },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth, navigate]);

  return (
    <div className={classes.createPostPage}>
      <div className={classes.cpContainer}>
        <h1>Create a Post</h1>
        <div className={classes.inputGp}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={classes.inputGp}>
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            rows="5"
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          />
        </div>
        <button className={classes.submit} onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
