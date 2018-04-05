import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { createHyperlink } from '../utils/createHyperlink';

const List = styled.ul`
  padding: 2em;
  list-style: none;
  display: grid;
  justify-items: start;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-items: center;
    padding: 1em 2em;
  }
`;
const Item = styled.li`
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 1;
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const Text = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const Contacts = ({ data }) => {
  if (data === undefined || !data.length) return <div />;
  return (
    <List>
      {data.map((item, i) => (
        <Item key={i}>
          <Link
            href={createHyperlink(item.key, item.value)}
            target="_blank"
            alt={item.value}
          >
            <Icon icon={item.icon} />
            <Text>{item.value}</Text>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default Contacts;
