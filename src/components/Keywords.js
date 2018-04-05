import React from 'react';

const Keywords = ({ keywords }) => (
  <div>
    <span>
      <b>Used: </b>
    </span>
    {keywords.map((keyword, i) => (
      <span key={i}>
        {keyword}
        {keywords.length - 1 === i ? '' : ', '}
      </span>
    ))}
  </div>
);

export default Keywords;
