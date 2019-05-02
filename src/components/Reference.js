import React from 'react';
import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: #97aac3;

  &:hover {
    text-decoration: underline;
  }
`;

const Reference = ({data}) => {
  if(!data) return <div />;
  return (
    <span>
      <i>
        <Link href={data.link} target="_blank">
          Read here
        </Link>
      </i>
    </span>
  );
};

export default Reference;
