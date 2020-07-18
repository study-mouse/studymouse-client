import React, { useState } from 'react';
import styled from 'styled-components';
import * as styles from '../constants/styles';
import { fontDefault } from '../constants/styles';
import { regexpUrl } from '../utils/index';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 15px 16px;
  width: 12rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 20px;
  order: ${(props) => props.col};
  background-color: ${(props) =>
    props.page === 'archived'
      ? styles.colors['little_dark_black']
      : props.idx === 1
      ? styles.colors[props.color]
      : styles.colors[`${props.color}_dark`]};
  
  border: ${(props) =>
    props.page === 'archived'
      ? `solid 2px ${styles.colors[`${props.color}_light`]}`
      : 0};
  
  :nth-child(${(props) => props.cnt}n+${(props) => props.col}) {
    order: ${(props) => props.col}
  };
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const EnglishWord = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const KoreanWord = styled(fontDefault)`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 0.75rem;
`;

const HoverSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const BtnGroup = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkTag = styled.a`
  font-size: 12px;
  text-overflow: ellipsis;
  width: 116px;
  text-decoration: none;
  color: ${styles.colors['white']};

  :visited {
    /* text-decoration: none; */
    color: ${styles.colors['white']};
  }
  :hover {
    /* text-decoration: none; */
    color: ${styles.colors['white']};
  }
  :focus {
    /* text-decoration: none; */
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
  width: 17px;
  height: 17px;
  &:hover {
    cursor: pointer;
  }
`;

const ColorPicker = styled.div`
  display: flex;

  position: relative;
  background-color: transparent;
  top: 0;
  right: 0;
`;

const Color = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  margin-right: 3px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: ${(props) => styles.colors[`${props.color}`]};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const Colors = ({ color, showColor, changeColor }) => {
  const colorArr = ['green', 'purple', 'gold'];
  const removeIndex = colorArr.indexOf(color);
  colorArr.splice(removeIndex, 1);

  return (
    <>
      {colorArr.map((color, index) => (
        <Color
          key={index}
          color={color}
          visible={showColor}
          onClick={() => changeColor(color)}
        />
      ))}
    </>
  );
};

const WordItem = ({ wordInfo, idx, col, columnCnt, page }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(wordInfo.color);
  const [isVisibleButtons, setIsVisibleButtons] = useState(false);

  const handleHover = (e) => {
    if (e.type === 'mouseenter') setShowPicker(true);
    else if (e.type === 'mouseleave') setShowPicker(false);
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const handleArchive = (e) => {
    if (e.type === 'mouseenter') setIsVisibleButtons(true);
    if (e.type === 'mouseleave') setIsVisibleButtons(false);
  };

  const submitArchive = () => {
    alert('아카이브 했네?');
  };

  const submitRemove = () => {
    alert('삭제를 누르다니..!');
  };

  return (
    <Wrapper
      color={color}
      idx={idx}
      col={col}
      cnt={columnCnt}
      onMouseEnter={handleArchive}
      onMouseLeave={handleArchive}
      page={page}
    >
      <Header>
        <EnglishWord>{wordInfo.english}</EnglishWord>
        {page === 'word' ? (
          <ColorPicker onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <Colors
              color={color}
              showColor={showPicker}
              changeColor={changeColor}
            />
            <Color
              color={color}
              visible
              onClick={() => changeColor(wordInfo.color)}
            />
          </ColorPicker>
        ) : null}
      </Header>
      <KoreanWord>{wordInfo.korean}</KoreanWord>
      <HoverSection>
        <LinkTag href={wordInfo.url} target="_blank">
          {regexpUrl(wordInfo.url)}
        </LinkTag>
        <BtnGroup visible={isVisibleButtons}>
          <ArchiveBtn onClick={submitArchive}>Archive</ArchiveBtn>
          <DeleteBtn
            src={require('../assets/bt_delete@3x.png')}
            onClick={submitRemove}
          />
        </BtnGroup>
      </HoverSection>
    </Wrapper>
  );
};

export default WordItem;
