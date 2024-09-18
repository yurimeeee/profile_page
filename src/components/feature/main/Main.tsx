'use client';

import RotatingText from '@components/share/RotatingText';
import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Wrap>
      <RotatingText text="Frontend Developer" />
      <RotatingText text="Kim yurim Portfolio" />
      {/* <Text>Frontend Developer</Text>
      <Text>Kim yurim Portfolio</Text> */}
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100%;
  height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Text = styled.div`
  font-family: 'ChosunNm';
  /* font-family: 'MontserratBold'; */
  font-weight: 900;
  font-size: 64px;
`;