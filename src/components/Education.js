import React from 'react';
import styled from 'styled-components';
import SideTitle from './SideTitle';

const Container = styled.div`
  padding: 2em;
`;

const Degree = styled.h4`
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 700
    line-height: 1.5;
`;

const Location = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  margin-bottom: 0px;
`;

const Duration = Location;

const Education = ({ education }) => {
  if (!education || !(education.length > 0)) return <div />;
  return (
    <Container>
      <SideTitle>Education</SideTitle>
      {education.map((item, i) => (
        <div key={i}>
          <Degree>{item.degree}</Degree>
          <Location>{item.location}</Location>
          <br />
          <Duration>{item.timeperiod}</Duration>
        </div>
      ))}
    </Container>
  );
};

export default Education;
