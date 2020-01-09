import styled, { css } from 'styled-components';

import { lighten } from 'polished';

import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;
export const Badge = styled.button`
  border: none;
  position: relative;
  background: none;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;
export const NotificationList = styled.div`
  z-index: 1;
  position: absolute;
  left: calc(50% - 130px);
  top: calc(100% + 15px);
  width: 260px;
  height: 100px;
  background: rgba(0, 0, 0, 0.8);
  padding: 15px 5px;
  border-radius: 2px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(0, 0, 0, 0.8);
  }
`;
export const Notification = styled.div`
  color: #fff;
  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    display: block;
    color: ${lighten(0.2, '#f45c43')};
    font-size: 11px;
    opacity: 0.8;
    line-height: 18px;
    margin-bottom: 5px;
  }
  button {
    font-size: 11px;
    background: none;
    border: 0;
    color: ${lighten(0.2, '#f45c43')};
    ${props =>
      props.unread &&
      css`
        &::after {
          content: '';
          display: inline-block;
          margin-left: 10px;
          width: 8px;
          height: 8px;
          background: #ff892e;
          border-radius: 50%;
        }
      `}
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
  &:hover {
    background: none;
    border: 0;
  }
`;
