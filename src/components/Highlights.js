import React from 'react';
import styled from 'styled-components';

const HighlightsContainer = styled.ul`
  padding-left: 20px;
  line-height: 1.5;
  margin: 0 0 10px;
`;

const Highlights = ({ highlights }) => (
  <HighlightsContainer>
    {highlights &&
      highlights.map((highlight, i) => (
        <li key={i} style={{ marginBottom: 5 }}>
          {highlight}
        </li>
      ))}
  </HighlightsContainer>
);

export default Highlights;
