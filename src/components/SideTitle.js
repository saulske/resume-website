import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 15px;
`;

const SideTitle = props => <Title>{props.children}</Title>;

export default SideTitle;
