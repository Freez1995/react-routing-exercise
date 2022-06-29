/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import {
  button,
  wrapper,
  link,
  linkWrapper,
  activeLink,
} from './Header.styles';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <NavLink to="/" css={link}>
          {({ isActive }) => (
            <p css={isActive ? activeLink : undefined}>Home</p>
          )}
        </NavLink>
        <NavLink to="info" css={link}>
          {({ isActive }) => (
            <p css={isActive ? activeLink : undefined}>Info</p>
          )}
        </NavLink>
        <NavLink to="blog" css={link}>
          {({ isActive }) => (
            <p css={isActive ? activeLink : undefined}>Blog</p>
          )}
        </NavLink>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
