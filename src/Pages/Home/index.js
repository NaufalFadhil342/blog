import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import React, { useEffect, useState } from 'react';
import classes from '../../App.module.css';

function Home() {
  const [postLists, setPostLists] = useState([]);

  const postCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [postCollectionRef]);

  return (
    <div className={classes.home}>
      {postLists.map((post) => {
        return (
          <div className={classes.post} key={post.id}>
            <div className={classes.postHeader}>
              <div className={classes.title}>
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className={classes.postText}>{post.postText}</div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
