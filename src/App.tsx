import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, NoMatch, ProtectedRoute } from 'shared';
import { Blog, BlogDetails, Home, Info, Login } from 'views';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storage = window.sessionStorage.getItem('loggedIn');
    if (storage === null) {
      window.sessionStorage.setItem('loggedIn', 'false');
      return;
    }
    setIsLogggedIn(JSON.parse(storage));
  }, []);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  useEffect(() => {
    window.sessionStorage.setItem('loggedIn', `${isLoggedIn}`);
  }, [onLogin]);

  return (
    <Routes>
      <Route path="/" element={<Layout onLogin={() => onLogin()} />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route
          path="login"
          element={
            isLoggedIn ? <Navigate to="/blog" replace={true} /> : <Login />
          }
        />
        <Route
          path="blog"
          element={isLoggedIn ? <ProtectedRoute /> : <Navigate to="/login" />}
        >
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogDetails />} />
        </Route>
        <Route
          path="*"
          element={<NoMatch path="/" linkText="Go to the home page" />}
        />
      </Route>
    </Routes>
  );
};
