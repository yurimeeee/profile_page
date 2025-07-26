'use client';

import React, { useEffect, useState } from 'react';

import { MdOutlineFeedback } from 'react-icons/md';
import styled from 'styled-components';
import theme from '@styles/theme';

const FeedbackButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdR-8sOdNxFdpw959ZHlfSybME6SryrCtsx6S28DReV_VyCTQ/viewform?usp=header', '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Wrapper>
      <Button onClick={scrollToTop} isVisible={isVisible}>
        <MdOutlineFeedback />
        <Tooltip>피드백</Tooltip>
      </Button>
    </Wrapper>
  );
};

export default FeedbackButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 112px;
  right: 40px;

  ${theme.devices.mobile} {
    bottom: 80px;
    right: 20px;
  }
`;

const Button = styled.button<{ isVisible: boolean }>`
  position: relative;
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

  &:hover span {
    opacity: 0.7;
    visibility: visible;
  }
  ${theme.devices.mobile} {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  top: -40px;
  background: #4a4a4a;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;
`;
