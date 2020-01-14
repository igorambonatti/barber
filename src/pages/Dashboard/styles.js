import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto 0;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;
  }
  button {
    border: 0;
    background: none;
  }
  strong {
    color: #fff;
    font-size: 22px;
    margin: 0 15px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
  }
`;
export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${props => (props.past ? 0.6 : 1)};
  strong {
    margin: 0;
    text-align: left;
    display: block;
    color: ${props => (props.available ? '#999' : '#eb3349')};
    font-size: 20px;
    font-weight: normal;
  }
  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#4F4F4F')};
  }
`;
