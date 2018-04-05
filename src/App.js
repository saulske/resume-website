import React, { Component } from 'react';
import styled from 'styled-components';
import MainContainer from './containers/MainContainer';
import ProfileContainer from './containers/ProfileContainer';
import ExtraContainer from './containers/ExtraContainer';
import FooterContainer from './containers/FooterContainer';

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'main profile'
    'main extra'
    'footer footer';
  max-width: 960px;
  margin: 0 auto;
  padding: 4em;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0;
    grid-template-areas:
      'profile'
      'main'
      'extra'
      'footer ';
  }
`;

class App extends Component {
  render() {
    const {
      bio,
      contacts,
      education,
      experiences,
      hobbies,
      projects,
      skills,
      reference
    } = this.props.data;
    return (
      <Container>
        <MainContainer
          summary={bio.about}
          skills={skills}
          experiences={experiences}
          projects={projects}
          reference={reference}
        />
        <ProfileContainer profile={bio} contacts={contacts} />
        <ExtraContainer education={education} hobbies={hobbies} />
        <FooterContainer />
      </Container>
    );
  }
}

export default App;
