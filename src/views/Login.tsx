import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProps } from 'shared/models';

export const Login: React.FC<AuthProps> = ({ isAuth }) => {
  return isAuth ? <Navigate to="/blog" replace={true} /> : <h1>LOGIN PAGE</h1>;
};
