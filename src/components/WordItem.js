import React from 'react';
import styled from 'styled-components';
import * as styles from '../constants/styles';
import { fontDefault } from '../constants/styles';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 15px 16px;
  width: 12rem;
  height: fit-content;
  margin: 1rem 1rem 1rem 0;
  border-radius: 20px;

  background-color: ${(props) =>
    props.idx === 1
      ? styles.colors[props.color]
      : styles.colors[`${props.color}_dark`]};
`;

const EnglishWord = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

const KoreanWord = styled(fontDefault)`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0.75rem;
`;

const UrlInfo = styled(fontDefault)`
  font-size: 12px;
  text-overflow: ellipsis;
  width: 7rem;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const LinkTag = styled.a`
  text-decoration: none;
  opacity: 0.7;
  :visited {
    text-decoration: none;
    color: ${styles.colors['white']};
  }
  :hover {
    text-decoration: none;
    color: ${styles.colors['white']};
  }
  :focus {
    text-decoration: none;
    color: ${styles.colors['white']};
  }
`;

const HoverSection = styled.div`
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${Wrapper}:hover & {
    display: none;
    transition: 0.5s;
  }
`;

const ArchiveBtn = styled.button`
  width: 3.6rem;
  height: 1.2rem;
  font-size: 12px;

  font-family: NotoSansCJKkr;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;

  color: white;
  background-color: ${styles.colors['dark_black']};
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 600;

  :focus {
    outline: 0;
  }
  :hover {
    cursor: pointer;
  }
`;

const DeleteBtn = styled(fontDefault)`
  font-size: 12px;
  color: white;
  opacity: 0.7;
  :hover {
    cursor: pointer;
  }
  text-decoration: underline;
`;

const WordItem = ({ wordInfo, idx }) => {
  console.log(wordInfo);
  console.log(1);
  return (
    <Wrapper color={wordInfo.color} idx={idx}>
      <EnglishWord>{wordInfo.english}</EnglishWord>
      <KoreanWord>{wordInfo.korean}</KoreanWord>
      <UrlInfo>
        <LinkTag href={wordInfo.url} target="_blank">
          {wordInfo.url}
        </LinkTag>
      </UrlInfo>
      <HoverSection>
        <ArchiveBtn>Archive</ArchiveBtn>
        <DeleteBtn>Delete</DeleteBtn>
      </HoverSection>
    </Wrapper>
  );
};

export default WordItem;
