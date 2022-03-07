import { useContext } from 'react';
import { Outlet } from 'react-router';
import LoginPage from './LoginPage';
import { UserContext } from './UserContext';

export default function ProtectedRoutes() {
  const { user } = useContext(UserContext);

  const isAuth = user.auth;
  // const isAuth = true;  -- For using frontend without backend
  return isAuth ? <Outlet /> : <LoginPage unauthed={true} />;
}
