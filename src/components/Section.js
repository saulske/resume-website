import React from 'react';
import Title from './Title';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 2em;
`;

const Section = props => (
  <Container>
    <Title icon={props.icon} title={props.title} />
    {props.children}
  </Container>
);

export default Section;
