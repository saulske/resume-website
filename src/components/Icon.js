import React from 'react';
import styled from 'styled-components';

const IconItem = styled.i`
  display: inline-block;
  border-radius: 50%;
  padding: 10px;
  top: -2px;
  position: relative;
  color: #fff;
  background: #42a8c0;
  width: 15px;
  height: 15px;
  text-align: center;
  background: ${props => props.theme.primary};
`;

const Icon = ({ icon }) => (
  <IconItem
    className={`fa fa-${icon}`}
    aria-hidden="true"
    style={{ fontSize: '14px' }}
  />
);

export default Icon;
