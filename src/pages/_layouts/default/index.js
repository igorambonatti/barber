import React from 'react';

import { Wrapper } from './styles';
// import { Container } from './styles';
import Header from '~/components/Header/index';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
