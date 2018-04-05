import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const Container = styled.div`
  grid-area: footer;
  grid-row: 6;
  padding: 30px;

  color: #545e6c;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

const FooterContainer = () => (
  <Container>
    <small>
      Baked by <b>saulske</b> <Icon icon="heart" />
    </small>
  </Container>
);

export default FooterContainer;
