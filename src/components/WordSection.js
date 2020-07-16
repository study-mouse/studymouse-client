import React from 'react';
import styled from 'styled-components';
import sortIcon from '../assets/sort.png';
import calendar from '../assets/icon_calendar@3x.png';
import * as mock from '../constants/mockData';
import WordList from './WordList';
import * as styles from '../constants/styles';

const WordWrapper = styled.div`
  flex-basis: 40rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  background-color: #1a1a1a;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  color: white;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  font-family: NotoSansCJKkr;
`;

const VerticalAlign = styled.div`
  display: flex;
  align-items: center;
`;

const WordTitle = styled.div`
  display: flex;
  font-family: NotoSansCJKkr;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
`;

const CalenderTitle = styled.div`
  display: flex;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: ${styles.colors['little_dark_black']};
`;

const SortIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin: auto 0 auto 1rem;
`;

const CalendarIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: auto 0 auto 0.5rem;
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
        <WordTitle>
          <VerticalAlign>Word</VerticalAlign>
          <SortIcon
            src={sortIcon}
            onClick={() => {
              alert('온클릭');
            }}
          />
        </WordTitle>
        <CalenderTitle>
          <VerticalAlign>2020년 7월</VerticalAlign>
          <CalendarIcon
            src={calendar}
            onClick={() => {
              alert('온클릭');
            }}
          />
        </CalenderTitle>
      </Header>
      <WordList
        sortedData={arrayGroupByKey(mock.mockData.datas, 'createdDate')}
      />
    </WordWrapper>
  );
};

export default WordSection;
