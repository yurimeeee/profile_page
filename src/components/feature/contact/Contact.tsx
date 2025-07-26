'use client';

import 'aos/dist/aos.css';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import { SiTistory } from 'react-icons/si';
import styled from 'styled-components';
import theme from '@styles/theme';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="contact">
      <BackgroundText text="Contact" top="0" />
      <Img src={`/images/contact.png`} alt={'contact'} />
      <CustomFlex $gap="40px" $justifyContent="center">
        <Profile src={`/images/profile.png`} alt={'contact'} />
        <FlexBox $flexDirection={'column'} $gap="28px" $maxWidth={280}>
          <FlexBox $flexDirection={'column'} $alignItems={'start'} $gap="10px">
            <Label>Email</Label>
            <Text>
              <a href="mailto:kplhn6@gmail.com">kplhn6@gmail.com</a>
            </Text>
          </FlexBox>
          <FlexBox $flexDirection={'column'} $alignItems={'start'} $gap="10px">
            <Label>Phone</Label>
            <Text>
              <a href="tel:+821095254089">+82 10-9525-4089</a>
            </Text>
          </FlexBox>
          <FlexBox $flexDirection={'row'} $alignItems={'start'} $gap="10px">
            <LinkButton onClick={() => window.open('https://www.linkedin.com/in/%EC%9C%A0%EB%A6%BC-%EA%B9%80-02989a298/', '_blank')}>
              <FaLinkedin size={24} />
            </LinkButton>
            <LinkButton onClick={() => window.open('https://github.com/yurimeeee', '_blank')}>
              <FaGithub size={24} />
            </LinkButton>
            <LinkButton onClick={() => window.open('https://gr0wingdeveloper.tistory.com', '_blank')}>
              <SiTistory size={20} />
            </LinkButton>
          </FlexBox>
        </FlexBox>
      </CustomFlex>
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 100px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 200px;
`;

const Link = styled.div`
  font-family: 'MontserratBold';
  font-weight: 700;
  ${theme.typography.h3};
  color: ${theme.colors.blueColor};
`;
const Label = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  ${theme.typography.h3};
  border-bottom: 1px solid black;
`;
const Text = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  ${theme.typography.h3};
`;

const Img = styled.img`
  z-index: 10;
  padding-right: 200px;

  ${theme.devices.tablet} {
    padding-right: 0;
  }
  ${theme.devices.mobile} {
    padding-right: 0;
    width: 100%;
  }
`;
const Profile = styled.img`
  height: 350px;
`;

const LinkButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #e8b7b7;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #eec4c4;
  }
`;

const CustomFlex = styled(FlexBox)`
  ${theme.devices.mobile} {
    flex-direction: column;
  }
`;
