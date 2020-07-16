import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.png';

const Navbar = styled.div`
  display: flex;
  height: 6rem;

  background-color: #1a1a1a;
`;

const ServiceName = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3rem;

  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  font-family: NotoSansCJKkr;
  color: white;
`;

const SearchInput = styled.input`
  width: 25rem;
  height: 3rem;
  border-radius: 1.5rem;
  margin: auto 0 auto 5rem;

  border: solid 1px #333333;
  background-color: black;
  color: white;
  font-size: 20px;
  padding-left: 1rem;

  :focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin: auto 0 auto -3rem;
`;

const Header = () => {
  const [state, setState] = useState('');
  return (
    <Navbar>
      <ServiceName>스터디마우스</ServiceName>
      <SearchInput
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <SearchIcon src={searchIcon} alt="search" onClick={() => alert(state)} />
    </Navbar>
  );
};

export default Header;
