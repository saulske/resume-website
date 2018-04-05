import React from 'react';
import Experience from './Experience';

const ExperienceList = ({ list }) =>
  list.map((exp, i) => <Experience key={i} data={exp} />);

export default ExperienceList;
