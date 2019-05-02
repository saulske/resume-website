import React from 'react';
import styled from 'styled-components';

import SideTitle from './SideTitle';

const Container = styled.div`
  padding: 2em;
`;
const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  margin-bottom: 10px;
`;

const Hobbies = ({list}) => (
  <Container>
    <SideTitle>Other</SideTitle>
    <List>{list.map((item, i) => <Item key={i}>{item}</Item>)}</List>
  </Container>
);

export default Hobbies;
