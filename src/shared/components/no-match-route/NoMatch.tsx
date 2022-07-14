/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { linkStyle } from './NoMatch.styles';

interface NoMatchProps {
  description?: string;
  path: string;
  linkText: string;
}

export const NoMatch: React.FC<NoMatchProps> = ({
  description,
  path,
  linkText,
}) => {
  return (
    <div>
      <h1>
        {description
          ? `${description}`
          : 'Oops, there is nothing on this Route!'}
      </h1>
      <Link to={`${path}`} css={linkStyle}>
        {linkText}
      </Link>
    </div>
  );
};
