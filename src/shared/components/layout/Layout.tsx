/** @jsxImportSource @emotion/react */

import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { wrapper } from './Layout.styles';

interface LayoutProps {
  onLogin: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ onLogin }) => {
  return (
    <main css={wrapper}>
      <Header onLogin={onLogin} />
      <Outlet />
    </main>
  );
};
