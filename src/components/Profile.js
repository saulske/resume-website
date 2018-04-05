import React from 'react';
import styled from 'styled-components';
import profile from '../data/id.jpg';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 2em;
  text-align: center;
  color: #fff;
`;

const Avatar = styled.img`
  max-width: 100px;
  margin-bottom: 15px;
  border: 0px solid #fff;
  border-radius: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Position = styled.h3`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;

const Profile = ({ bio }) => (
  <Container>
    <Avatar src={profile} alt="Profile" />
    <Name>
      {bio.first} {bio.last}{' '}
    </Name>
    <Position>{bio.position}</Position>
  </Container>
);

export default Profile;
