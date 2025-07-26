'use client';

import React from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';

const Footer = () => {
  return (
    <Wrap>
      <CopyWrite>© 2025 Kim Yurim All rights reserved</CopyWrite>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background-color: #f2f2f2;
`;
const CopyWrite = styled.div`
  font-family: 'ChosunNm';
  ${theme.typography.h5}
  font-weight: 900;
`;
