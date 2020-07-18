import React from 'react';
import styled from 'styled-components';
import * as mock from '../constants/mockData';
import WordList from './WordList';

const WordWrapper = styled.div`
  margin-top: 5rem;
  flex-basis: 40rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  background-color: #1a1a1a;
`;

// 배열을 받으면 특정 키별로 정렬 해줌
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

const WordSection = () => {
  fetch(
    'https://studymouse-mjung1798.endpoint.ainize.ai/api/word/DASH_BOARD?startDate=2020-01-01&endDate=2020-12-31',
  )
    .then((res) => {
      console.log(res);
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });
  return (
    <WordWrapper>
      <WordList
        sortedData={arrayGroupByKey(mock.mockData.datas, 'createdDate')}
      />
    </WordWrapper>
  );
};

export default WordSection;
