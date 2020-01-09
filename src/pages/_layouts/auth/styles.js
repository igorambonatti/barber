import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(to right, #eb3349, #f45c43);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    a {
      color: #fff;
      font-size: 12px;
      margin-top: 10px;
      opacity: 0.75;
      &:hover {
        opacity: 1;
      }
    }
    span {
      color: #fff;
      font-size: 10px;
      margin-top: -8px;
      text-align: left;
      margin-bottom: 2px;
    }
  }

  input {
    height: 54px;
    background: rgba(250, 250, 250, 1);
    margin: 0 0 10px;
    border: 0px;
    border-radius: 4px;
    padding: 0 15px;
    color: #000000;
    font-size: 14px;
    opacity: 0.85;
    &:hover {
      opacity: 0.95;
    }
  }
  &::placeholder {
    color: rgba(255, 255, 255, 1);
  }
  button {
    margin: 2px 0 0;
    height: 44px;
    background: ${darken(0.04, '#ed213a')};
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#ed213a')};
    }
  }
`;
