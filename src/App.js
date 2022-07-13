import { lazy, useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Navigation from './Components/Header/navigation';
import LoadingImg from './Gambar/loading.png';

const Home = lazy(() => import('./Pages/Home/index'));
const Login = lazy(() => import('./Pages/Login/index'));
const CreatePost = lazy(() => import('./Pages/Post/createPost'));

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className={classes.App}>
      <Suspense
        fallback={
          <p className={classes.loading}>
            <img src={LoadingImg} alt="/" />
          </p>
        }
      >
        <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes fallback={LoadingImg}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<CreatePost isAuth={isAuth} />} />
          <Route path="/auth" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
