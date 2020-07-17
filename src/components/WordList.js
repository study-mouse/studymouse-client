import React from 'react';
import styled from 'styled-components';
import WordItem from './WordItem';
import * as styles from '../constants/styles';
import { fontDefault } from '../constants/styles';

const Wrapper = styled.div`
  color: white;
  font-size: 20px;
  padding: 1.2rem 1rem;
  border-radius: 10px;
`;

const CriteriaSection = styled.div`
  margin-bottom: 0.75rem;
`;

const Criteria = styled(fontDefault)`
  padding-left: 0.5rem;

  color: ${(props) =>
    props.latest ? styles.colors['white'] : styles.colors['brown_grey']};
  font-size: 16px;
  font-weight: bold;
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
          <CriteriaSection key={key}>
            <Criteria latest={idx === 1}>{key}</Criteria>
            <div>
              {value.map((word) => {
                return <WordItem wordInfo={word} key={word.id} idx={idx} />;
              })}
            </div>
          </CriteriaSection>
        );
      })}
    </Wrapper>
  );
};

export default WordList;
