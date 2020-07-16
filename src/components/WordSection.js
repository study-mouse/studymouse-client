import React from 'react';
import styled from 'styled-components';

const WordWrapper = styled.div`
  border: 1px solid blue;
  flex-basis: 30rem;
  flex-grow: 1;
`;

const WordSection = () => {
  return <WordWrapper>Words</WordWrapper>;
};

export default WordSection;
