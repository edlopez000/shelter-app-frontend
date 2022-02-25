import { useContext } from 'react';
import { Outlet } from 'react-router';
import LoginPage from './LoginPage';
import { UserContext } from './UserContext';

export default function ProtectedRoutes() {
  const { user } = useContext(UserContext);

  const isAuth = user.auth;
  return isAuth ? <Outlet /> : <LoginPage unauthed={true} />;
}
