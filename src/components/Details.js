import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  line-height: 1.5;
  margin: 0 0 10px;
`;

const Details = ({ text }) => <Paragraph>{text}</Paragraph>;

export default Details;
