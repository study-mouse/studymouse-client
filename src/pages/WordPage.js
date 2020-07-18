import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import WordList from '../components/WordList';
import * as mock from '../constants/mockData';

const WordPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const arrayGroupByKey = (array, key) => {
    const groupedObj = array.reduce((result, curValue) => {
      (result[curValue[key]] = result[curValue[key]] || []).push(curValue);
      return result;
    }, {});
    const ordered = {};
    Object.keys(groupedObj)
      .sort()
      .reverse()
      .forEach((key) => {
        ordered[key] = groupedObj[key];
      });
    return ordered;
  };

  const fetchData = async () => {
    const response = await axios.get(
      'http://192.168.219.111:8080/api/word/DASH_BOARD?startDate=2020-01-01&endDate=2020-12-31',
    );
    console.log('response', response);

    return response.data.response;
  };

  return (
    <Section>
      <WordWrapper>
        <WordList sortedData={arrayGroupByKey(data, 'createdDate')} />
      </WordWrapper>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  height: 100vh;
`;
const WordWrapper = styled.div`
  margin-top: 5rem;
  flex-basis: 40rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

  background-color: #1a1a1a;
`;

export default WordPage;
