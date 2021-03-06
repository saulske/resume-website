import React from 'react';
import Project from './Project';

const ProjectsList = ({ list }) =>
  list.map((project, i) => <Project key={i} data={project} />);

export default ProjectsList;
