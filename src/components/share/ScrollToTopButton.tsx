'use client';

import React, { useEffect, useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';
import theme from '@styles/theme';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button onClick={scrollToTop} isVisible={isVisible}>
      <IoIosArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;

const Button = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${theme.colors.blueColor};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: 0.3s ease-in-out;
  width: 56px;
  height: 56px;
  min-width: 56px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: #878289;
    box-shadow: 0px 0px 0px 1.5px rgba(72, 96, 158, 0.7);
  }
`;
