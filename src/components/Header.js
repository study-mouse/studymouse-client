import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fontDefault } from '../constants/styles';
import * as styles from '../constants/styles';

const Navbar = styled.div`
  display: flex;
  height: 5rem;
  position: fixed;
  width: 100%;

  background-color: ${styles.colors['dark_black']};
  border-bottom: 1px solid #333333;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  margin: 0 30px;
  width: 240px;
`;
const Logo = styled.img`
  height: 80%;
`;

const PageName = styled(fontDefault)`
  margin: auto 2rem;
  font-size: 20px;
  font-weight: 900;
  color: ${(props) =>
    props.selected ? styles.colors['white'] : styles.colors['brown_grey']};
  text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    if (document.URL.split('/').includes('login')) setIsLogin(false);
  });

  return (
    <Navbar>
      <LogoContainer href="/">
        <Logo src={require('../assets/logo.png')} />
      </LogoContainer>
      {isLogin && (
        <>
          <PageName selected>Word</PageName>
          <PageName>Archived</PageName>
        </>
      )}
    </Navbar>
  );
};

export default Header;
