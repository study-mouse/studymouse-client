import React from 'react';
import styled from 'styled-components';

import WordList from '../components/WordList';
import * as mock from '../constants/mockData';

const WordPage = () => {
  const arrayGroupByKey = (array, key) => {
    const groupedObj = array.reduce((result, curValue) => {
      (result[curValue[key]] = result[curValue[key]] || []).push(curValue);
      return result;
    }, {});
    const ordered = {};
    Object.keys(groupedObj)
      .sort()
      .reverse()
      .forEach((key) => {
        ordered[key] = groupedObj[key];
      });
    return ordered;
  };
  return (
    <Section>
      <WordWrapper>
        <WordList
          sortedData={arrayGroupByKey(mock.mockData.datas, 'createdDate')}
          page="word"
        />
      </WordWrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
`;
const WordWrapper = styled.div`
  margin-top: 5rem;
  flex-basis: 40rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  background-color: #1a1a1a;
`;

export default WordPage;
