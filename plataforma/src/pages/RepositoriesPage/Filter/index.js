import React from 'react'

import { Container, Selector, Cleaner } from './styles'

const Filter = () =>    {
  const langs = [
    {name: 'Javascript', count: 5, color: '#f1c40f'},
    {name: 'Shell', count: 2, color: '#95a5a6'},
    {name: 'PHP', count: 1, color: '#3498db'},
  ];
/* langs possui os objetos vai executar a função map, cada elemento do langs será colocado dentro da variável lang lang foi substituido por {name, count, color} */
  const selectors = langs.map(({name, count, color}) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
return (
<Container>
  {selectors}
  <Cleaner>
    Limpar
  </Cleaner>
</Container>

)}

export default Filter
