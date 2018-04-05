import React from 'react';
import styled from 'styled-components';
import Keywords from './Keywords';
import Highlights from './Highlights';

const Container = styled.div`
  margin-bottom: 2em;
`;

const Header = styled.div`
  display: grid;
`;

const Title = styled.h3`
  grid-column: 1 / 3;
  grid-row: 1;
  color: #3f4650;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
`;

const Duration = styled.span`
  text-align: right;
  grid-row: 1;
  color: #97aac3;
`;

const Company = styled.span`
  grid-row: 2;
  color: #97aac3;
  margin: 2px 0 10px;
`;

const Experience = ({ data }) => (
  <Container>
    <Header>
      <Title>{data.position}</Title>
      <Duration>{data.timeperiod}</Duration>
      <Company>{data.company}</Company>
    </Header>
    <Highlights highlights={data.highlights} />
    <Keywords keywords={data.keywords} />
  </Container>
);

export default Experience;
