import React from 'react';

  import PropTypes from 'prop-types';



import { Container, Title, Button  } from './styles';

const RepositoriesDelete = ({
  onDelete
}) => (
  <Container>
     <Title> Tem certeza que quer apagar esse repositório?</Title>

     <Button
            onClick={onDelete }
          >
      Apagar
          </Button >

  </Container>
)

RepositoriesDelete.defaultProps = {
  onDelete: undefined,
}

RepositoriesDelete.propTypes = {



  onDelete: PropTypes.func,
}

export default RepositoriesDelete;
