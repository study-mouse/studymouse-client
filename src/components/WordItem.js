import React from 'react';
import styled from 'styled-components';
import * as styles from '../constants/styles';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 1rem;
  width: 12rem;
  height: fit-content;
  margin: 1rem 1rem 1rem 0;

  background-color: ${(props) =>
    props.color ? styles.colors[props.color] : styles.colors['dark_black']};
`;

const EnglishWord = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
`;

const KoreanWord = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

const WordItem = ({ wordInfo }) => {
  return (
    <Wrapper color={wordInfo.color}>
      <EnglishWord>{wordInfo.english}</EnglishWord>
      <KoreanWord>{wordInfo.korean}</KoreanWord>
      {/*<div>{wordInfo.description}</div>*/}
    </Wrapper>
  );
};

export default WordItem;
