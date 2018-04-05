import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillsList = ({ list }) => {
  if (list === undefined || !list.length) return <div />;
  return <List>{list.map((item, i) => <li key={i}>{item}</li>)}</List>;
};

export default SkillsList;
