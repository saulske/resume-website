import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Details from '../components/Details';
import ExperienceList from '../components/ExperienceList';
// import ProjectsList from '../components/ProjectsList';
import Reference from '../components/Reference';
import SkillsList from '../components/SkillsList';

const Container = styled.div`
  grid-area: main;
  grid-column: 1 / 2;
  grid-row: 1 / 6;
  padding: 4em;
  background: #fff;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-row: 2;
    grid-column: 1;
    padding: 3em;
  }
`;

const MainContainer = props => (
  <Container>
    <Section icon="user" title="Career Profile">
      <Details text={props.summary} />
    </Section>
    <Section icon="rocket" title="Skills">
      <SkillsList list={props.skills} />
    </Section>
    <Section icon="suitcase" title="Experiences">
      <ExperienceList list={props.experiences} />
    </Section>
    {/* <Section icon="code" title="Projects">
      <ProjectsList list={props.projects} />
    </Section> */}
    <Section icon="comment-o" title="References">
      <Reference data={props.reference} />
    </Section>
  </Container>
);

export default MainContainer;
