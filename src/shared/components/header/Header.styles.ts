import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0px;
`;

export const button = css`
  border: 1px solid #dbdbdb;
  border-radius: 36px;
  width: 128px;
  &:active {
    background-color: white;
  }
`;

export const link = css`
  font-size: 20px;
  text-decoration: none;
  display: block;
  text-align: center;
`;

export const activeLink = css`
  font-weight: bold;
  text-decoration: none;
`;

export const linkWrapper = css`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
