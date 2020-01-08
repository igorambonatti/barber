import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  margin: 50px auto;
  max-width: 500px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
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
    height: 58px;
    background: rgba(250, 250, 250, 1);
    margin: 0 0 10px;
    border: 0px;
    border-radius: 4px;
    padding: 0 15px;
    color: #000000;
    font-size: 16px;
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
    height: 48px;
    background: ${darken(0.06, "#3b9eff")};
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.1, "#3b9eff")};
    }
  }
  > button {
    margin-top: 10px;
    width: 100%;
    background: ${darken(0.04, "#ee2c2c")};
    &:hover {
      background: ${darken(0.08, "#ee2c2c")};
    }
  }
`;
