import React from 'react';
import styled from 'styled-components';
import WordItem from './WordItem';

const Wrapper = styled.div`
  color: white;
  font-size: 20px;
`;

const WordList = ({ sortedData }) => {
  console.log(sortedData);
  Object.entries(sortedData).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
  });

  return (
    <Wrapper>
      {Object.entries(sortedData).map(([key, value]) => {
        return (
          <div key={key}>
            <div>{key}</div>
            <div>
              {value.map((word) => {
                return <WordItem wordInfo={word} key={word.id} />;
              })}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WordList;
