import React from 'react';
import styled from 'styled-components';

const WebsiteWrapper = styled.div`
  border: 1px solid green;
  flex-basis: 0;
  flex-grow: 3;
`;

const WebsiteSection = () => {
  return <WebsiteWrapper>Website</WebsiteWrapper>;
};

export default WebsiteSection;
