import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import WordPage from './pages/WordPage';
import LoginPage from './pages/LoginPage';
import * as styles from './constants/styles';

const Wrapper = styled.div`
  height: 100%;
  background-color: ${styles.colors['dark_black']};
`;

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={WordPage} />
          <Route path="/archive" component={WordPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
