import React from 'react';
import styled from 'styled-components';
import * as styles from '../constants/styles';
import { fontDefault } from '../constants/styles';
import { regexpUrl } from '../utils/index';

const BtnGroup = styled.div`
  display: none;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 15px 16px;
  width: 12rem;
  height: fit-content;
  margin: 1rem 1rem 1rem 0;
  border-radius: 20px;
  order: ${(props) => props.col};

  background-color: ${(props) =>
    props.idx === 1
      ? styles.colors[props.color]
      : styles.colors[`${props.color}_dark`]};
  
  :nth-child(${(props) => props.cnt}n+${(props) => props.col}) {
    order: ${(props) => props.col}
  };
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ColorButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 8px;
  border: 1px solid white;

  :hover {
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    bottom: 100px;
  }
`;

const SelectColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: ${(props) => styles.colors[`${props.color}`]};
  opacity: 0.5;
  margin-bottom: 4px;
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

const HoverSection = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LinkTag = styled.a`
  font-size: 12px;
  text-overflow: ellipsis;
  width: 5rem;
  text-decoration: none;
  color: ${styles.colors['white']};

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

const ArchiveBtn = styled.button`
  width: 3.6rem;
  height: 1.2rem;
  font-size: 12px;
  margin-right: 5px;

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

const DeleteBtn = styled.img`
  width: 14px;
  height: 14px;
  &:hover {
    cursor: pointer;
  }
`;

const WordItem = ({ wordInfo, idx, col, columnCnt }) => {
  return (
    <Wrapper color={wordInfo.color} idx={idx} col={col} cnt={columnCnt}>
      <Header>
        <EnglishWord>{wordInfo.english}</EnglishWord>
        <ColorButton>
          <SelectColor color="green" />
          <SelectColor color="purple" />
          <SelectColor color="gold" />
        </ColorButton>
      </Header>
      <KoreanWord>{wordInfo.korean}</KoreanWord>
      <HoverSection>
        <LinkTag href={wordInfo.url} target="_blank">
          {regexpUrl(wordInfo.url)}
        </LinkTag>
        <BtnGroup>
          <ArchiveBtn>Archive</ArchiveBtn>
          <DeleteBtn src={require('../assets/bt_delete@3x.png')} />
        </BtnGroup>
      </HoverSection>
    </Wrapper>
  );
};

export default WordItem;
