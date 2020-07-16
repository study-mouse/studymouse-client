import React from 'react';
import styled from 'styled-components';
import sortIcon from '../assets/sort.png';
import * as mock from '../constants/mockData';
import WordList from './WordList';

const WordWrapper = styled.div`
  border: 1px solid blue;
  flex-basis: 30rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  background-color: #1a1a1a;
`;

const Header = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  font-family: NotoSansCJKkr;
`;

const SortIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: auto 0 auto 1rem;
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
    .forEach((key) => {
      ordered[key] = groupedObj[key];
    });
  return ordered;
};

const WordSection = () => {
  return (
    <WordWrapper>
      <Header>
        Word
        <SortIcon
          src={sortIcon}
          onClick={() => {
            alert('온클릭');
          }}
        />
      </Header>
      <WordList
        sortedData={arrayGroupByKey(mock.mockData.datas, 'createdDate')}
      />
    </WordWrapper>
  );
};

export default WordSection;
