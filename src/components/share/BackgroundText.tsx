import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import theme from '@styles/theme';

interface BackgroundTextProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  text?: string;
  desc?: string;
  center?: boolean;
}

const BackgroundText = ({ top, left, right, bottom, text, desc, center }: BackgroundTextProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const letters = text?.split('').map((char, idx) => (
    <Letter key={idx} index={idx} scrollPosition={scrollPosition}>
      {char}
    </Letter>
  ));

  return (
    <Wrap top={top} left={left} right={right} bottom={bottom}>
      {letters}
      {desc && <Text>{desc}</Text>}
    </Wrap>
  );
};

export default BackgroundText;

interface LetterProps {
  index: number;
  scrollPosition: number;
}

const Letter = styled.span<LetterProps>`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  color: #f4f2f2;
  font-size: 220px;
  font-family: 'Libre Bodoni', sans-serif;
  font-weight: 700;
  opacity: 0.2;
  transition: opacity 0.4s ease, color 0.5s ease;
  z-index: 0;

  ${(props) =>
    props.scrollPosition > props.index * 30 &&
    `
    opacity: 1;
    color: #f0eff1;
  `}

  ${theme.devices.mobile} {
    font-size: 100%;
    white-space: nowrap;
  }
`;

const Wrap = styled.div<BackgroundTextProps>`
  position: absolute;
  display: inline-block;
  font-size: 220px;
  font-family: 'Libre Bodoni', sans-serif;
  font-weight: 700;
  width: 100%;
  padding: 0 24px;
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
    ${(props) => props.right && `right: ${props.right};`}
    ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) =>
    props.center &&
    `
  left:'50%';
  transform: translateX(-50%);`}
    ${theme.devices.tablet} {
    font-size: 120px;
  }
  ${theme.devices.mobile} {
    font-size: 100px;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'ChosunNm';
  font-size: 36px;
  width: 100%;

  ${theme.devices.mobile} {
    font-size: 24px;
  }
`;
