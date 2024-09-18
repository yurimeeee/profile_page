import React from 'react';
import styled, { keyframes } from 'styled-components';

interface RotatingTextProps {
  text: string;
}

const RotatingText = ({ text }: RotatingTextProps) => {
  return (
    <TextContainer>
      {text.split('').map((char, index) => (
        <Char key={index} delay={index * 0.1}>
          {char}
        </Char>
      ))}
    </TextContainer>
  );
};

export default RotatingText;

const rotateIn = keyframes`
  0% {
    transform: rotate(15deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  font-size: 40px;
  font-weight: bold;
`;

const Char = styled.span<{ delay: number }>`
  display: inline-block;
  animation: ${rotateIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  font-family: 'ChosunNm';
  font-weight: 900;
  font-size: 64px;
`;
