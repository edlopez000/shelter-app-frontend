import React from 'react';
import { Outlet } from 'react-router';
import useAuth from './AuthService';
import LoginPage from './LoginPage';

export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginPage />;
}
