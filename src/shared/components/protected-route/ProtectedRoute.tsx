import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from 'shared/models';

export const ProtectedRoute: React.FC<AuthProps> = ({ isAuth }) => {
  const waitBeforeShow = 1;
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? isAuth ? <Outlet /> : <Navigate to="/login" /> : null;
};
