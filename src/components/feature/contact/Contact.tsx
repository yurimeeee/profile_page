'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from '@styles/theme';
import { FlexBox } from '@components/styled/StyledComponents';
import BackgroundText from '@components/share/BackgroundText';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="contact">
      <BackgroundText text="Contact" top="0" />
      <Img src={`/images/contact.png`} alt={'contact'} />
      <FlexBox $gap="40px" $justifyContent="center">
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
          <FlexBox $flexDirection={'column'} $alignItems={'start'} $gap="10px">
            <Label>Github</Label>
            <Text>
              <a href="https://github.com/yurimeeee">https://github.com/yurimeeee</a>
            </Text>
          </FlexBox>
          <FlexBox $flexDirection={'column'} $alignItems={'start'} $gap="10px">
            <Label>Blog</Label>
            <Text>
              <a href="https://gr0wingdeveloper.tistory.com">https://gr0wingdeveloper.tistory.com</a>
            </Text>
          </FlexBox>
        </FlexBox>
      </FlexBox>
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
`;
const Profile = styled.img`
  height: 350px;
`;
