import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Container = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.primary};
  position: relative;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Title = ({ icon, title }) => (
  <Container>
    <Icon icon={icon} /> {title}
  </Container>
);

export default Title;
