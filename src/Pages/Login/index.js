import { useNavigate } from 'react-router-dom';
import classes from '../../App.module.css';
import { Auth, Provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const signinWithGoogle = () => {
    signInWithPopup(Auth, Provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className={classes.login}>
      <p>Sign In with Google</p>
      <button className={classes.signIn} onClick={signinWithGoogle}>
        Google
      </button>
    </div>
  );
}

export default Login;
