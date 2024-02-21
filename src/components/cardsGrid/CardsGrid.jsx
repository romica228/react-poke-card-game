import React from 'react';
import { Card, Wrapper } from './CardsGrid.styles.js';

export default function CardsGrid(props) {
  const { data } = props;

  return (
    <Wrapper>
      {data && data.map((poke) => (
        <Card key={poke.name}>
          <img src={poke.images.front_default} alt="Poke front card" />
          <span>{poke.name}</span>
        </Card>
      ))}
    </Wrapper>
  );
}
