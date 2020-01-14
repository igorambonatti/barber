import React, { useMemo, useState } from 'react';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={52} color="#fff" />
        </button>

        <strong>{dateFormated}</strong>
        <button type="button">
          <MdChevronRight size={52} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Igor Ambonatti</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em Aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Igor Ambonatti</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Igor Ambonatti</span>
        </Time>
      </ul>
    </Container>
  );
}
