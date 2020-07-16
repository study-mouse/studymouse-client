import React from 'react';
import styled from 'styled-components';
import WordItem from './WordItem';
import * as styles from '../constants/styles';

const Wrapper = styled.div`
  color: white;
  font-size: 20px;
  padding: 0.5rem 0;
`;

const Criteria = styled.div`
  padding-left: 0.5rem;

  color: ${(props) =>
    props.latest ? styles.colors['white'] : styles.colors['brown_grey']};
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  font-family: NotoSansCJKkr;
`;

const WordList = ({ sortedData }) => {
  console.log(sortedData);
  Object.entries(sortedData).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
  });
  let idx = 0;
  return (
    <Wrapper>
      {Object.entries(sortedData).map(([key, value]) => {
        idx++;
        return (
          <div key={key}>
            <Criteria latest={idx === Object.keys(sortedData).length}>
              {key}
            </Criteria>
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
