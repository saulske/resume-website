import React from 'react';

const Project = ({ data }) => (
  <p>
    <a href={data.link} target="_blank">
      {data.title}
    </a>{' '}
    - {data.description}
  </p>
);

export default Project;
