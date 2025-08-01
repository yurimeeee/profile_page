'use client';

import React from 'react';
import RotatingText from '@components/share/RotatingText';
import styled from 'styled-components';
import theme from '@styles/theme';

const Main = () => {
  return (
    <Wrap>
      <RotatingText text="Frontend Developer" />
      <RotatingText text="Kim yurim Portfolio" />
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
  padding-top: -68px;

  ${theme.devices.mobile} {
    height: calc(100vh - 100px);
    padding-top: -100px;
  }
`;
const Text = styled.div`
  font-family: 'ChosunNm';
  font-weight: 900;
  font-size: 64px;
`;
