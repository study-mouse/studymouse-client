import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import WordSection from './components/WordSection';
import WebsiteSection from './components/WebsiteSection';

const Wrapper = styled.div`
  height: 100%;
`;

const Section = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Section>
        <WordSection />
        <WebsiteSection />
      </Section>
    </Wrapper>
  );
};

export default App;
