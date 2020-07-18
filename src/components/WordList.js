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

const Masonry = styled.div`
  // TODO - breakpoint 잡아서 col갯수 계산하기
  // display: flex;
  // flex-flow: column wrap;
`;

const WordList = ({ sortedData }) => {
  let idx = 0;
  return (
    <Wrapper>
      {Object.entries(sortedData).map(([key, value]) => {
        idx++;

        return (
          <CriteriaSection key={key}>
            <Criteria latest={idx === 1}>{key}</Criteria>
            <Masonry>
              {value.map((word) => {
                return <WordItem wordInfo={word} key={word.id} idx={idx} />;
              })}
            </Masonry>
          </CriteriaSection>
        );
      })}
    </Wrapper>
  );
};

export default WordList;
