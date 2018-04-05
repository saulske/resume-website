import React from 'react';
import styled from 'styled-components';
import Education from '../components/Education';
import Hobbies from '../components/Hobbies';

const Container = styled.div`
  grid-area: extra;
  grid-row: 2 / 6;
  grid-column: 2 / 3;
  background: ${props => props.theme.primary};
  color: #fff;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 3;
    grid-column: 1;
  }
`;

const ProfileContainer = props => (
  <Container>
    <Education education={props.education} />
    <Hobbies list={props.hobbies} />
  </Container>
);

export default ProfileContainer;
