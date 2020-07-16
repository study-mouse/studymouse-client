import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  width: 12rem;
  height: 5rem;
  border: 1px solid white;
  margin: 1rem;
`;

const WordItem = ({ wordInfo }) => {
  return (
    <Wrapper>
      <div>{wordInfo.english}</div>
      <div>{wordInfo.korean}</div>
      <div>{wordInfo.description}</div>
    </Wrapper>
  );
};

export default WordItem;
