import React from 'react';
import styled from 'styled-components';
import { fontDefault } from '../constants/styles';
import * as styles from '../constants/styles';

const Navbar = styled.div`
  display: flex;
  height: 5rem;
  position: fixed;
  width: 100%;
  top: 0;

  background-color: ${styles.colors['dark_black']};
  border-bottom: 1px solid #333333;
`;

const ServiceName = styled(fontDefault)`
  display: flex;
  align-items: center;
  margin: 0 5rem 0 3rem;

  font-size: 20px;
  font-weight: 900;
  color: white;
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
  return (
    <Navbar>
      <ServiceName>스터디마우스</ServiceName>
      <PageName selected={true}>Word</PageName>
      <PageName selected={false}>Archived</PageName>
    </Navbar>
  );
};

export default Header;
