import React from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile';
import Contacts from '../components/Contacts';

const Container = styled.div`
  grid-area: profile;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background: ${props => props.theme.primary};
  color: #fff;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 1;
    grid-column: 1;
  }
`;

const ProfileContainer = props => (
  <Container>
    <Profile bio={props.profile} />
    <Contacts data={props.contacts} />
  </Container>
);

export default ProfileContainer;
