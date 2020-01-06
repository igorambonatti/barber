import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eb3349;
    }
    a {
      font-weight: bold;
      color: #eb3349;
      font-size: 14px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eb3349;
  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    max-width: 200px;
    display: block;
    color: #eb3349;
    margin-top: 2px;
  }
  a {
    color: #999;
    margin-top: 2px;
    font-size: 12px;
  }
  img {
    height: 42px;
    border-radius: 50%;
    margin-top: 2px;
    margin-left: 4px;
  }
`;
