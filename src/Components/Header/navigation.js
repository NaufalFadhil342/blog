import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './navigation.module.css';
import { signOut } from 'firebase/auth';
import { Auth } from '../../firebase';

function Navigation({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(Auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/auth');
    });
  };

  return (
    <nav className={classes.nav}>
      <Link to="/">Home</Link>
      {!isAuth ? (
        <Link to="/auth">Login</Link>
      ) : (
        <>
          <Link to="/post">Create Post</Link>
          <button className={classes.logout} onClick={signUserOut}>
            Log Out
          </button>
        </>
      )}
    </nav>
  );
}

export default Navigation;
