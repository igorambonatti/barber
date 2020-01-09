import React from 'react';

import { Wrapper, Content } from './styles';
// import { Container } from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
