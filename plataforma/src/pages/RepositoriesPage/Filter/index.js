import React from 'react';
import PropTypes from 'prop-types';

import { Container, Selector, Cleaner, Footer } from './styles';

const Filter = ({ languages, currentLanguage, onClick, onFilterAddClick }) => {



/* langs possui os objetos vai executar a função map, cada elemento do langs será colocado dentro da variável lang lang foi substituido por {name, count, color} */
  const selectors = languages.map(({name, count, color}) => (
    <Selector

      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
return (
<Container>
  {selectors}
  <Footer>
  <Cleaner
    onClick={() => onClick && onClick(undefined)}
  >
    Limpar
  </Cleaner>


  <Cleaner
    onClick={onFilterAddClick}
  >
    Adicionar
  </Cleaner>
</Footer>
</Container>

)}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
  onFilterAddClick: null,
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
  onFilterAddClick: PropTypes.func,
}

export default Filter
