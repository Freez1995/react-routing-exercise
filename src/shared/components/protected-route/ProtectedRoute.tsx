import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const ProtectedRoute: React.FC = () => {
  const waitBeforeShow = 1;
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? <Outlet /> : null;
};
