'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import theme from '@styles/theme';
import { FlexBox } from '@components/styled/StyledComponents';
import BackgroundText from '@components/share/BackgroundText';

const About = () => {
  const [isHovered, setIsHovered] = useState('');

  const handleMouseEnter = (value: string) => setIsHovered(value);
  const handleMouseLeave = () => setIsHovered('');

  return (
    <Wrap id="about">
      <BackgroundText text="About me" top="0" left="28%" />
      <FlexBox $gap="40px">
        <Image src={'/images/about1.png'} alt="about_image" width={300} height={320} />
        <Text isHovered={isHovered == 'ceramic'}>
          <Bold
            onMouseEnter={() => {
              handleMouseEnter('ceramic');
            }}
            onMouseLeave={handleMouseLeave}
          >
            고민할 시간에 일단 시작하기
          </Bold>
          <br />
          흙을 만지던 도예과 흙쟁이가 영화관을 거쳐 개발자가 되기까지 <br />
          흥미있는 일에 두려움 없이 뛰어들며 목표를 이루어 냅니다. <br />
          기술의 발전을 유연하게 적용하며 창의적으로 문제를 해결하고 편리한 기능과 매력적인 사용자 경험을 만드는 것이 현재의 목표입니다.
        </Text>
      </FlexBox>
      <FlexBox $gap="40px">
        <Image src={'/images/about2.png'} alt="about_image" width={300} height={320} />
        <Text isHovered={isHovered == 'torystory'}>
          <Bold
            onMouseEnter={() => {
              handleMouseEnter('torystory');
            }}
            onMouseLeave={handleMouseLeave}
          >
            “To infinity and beyond!”
          </Bold>
          가장 좋아하는 영화 ‘토이 스토리’에서 <br />
          주인공 ‘버즈 라이트 이어‘가 하늘을 향해 비상할때 외치는 대사입니다. <br />
          ‘무한한 공간 저 너머로’라는 말 그대로. <br />
          끊임없이 성장해 나가는 실력 있는 개발자로 비상하겠습니다.
        </Text>
      </FlexBox>
    </Wrap>
  );
};

export default About;

const Wrap = styled.div`
  width: 100%;
  /* height: calc(100vh - 68px); */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 140px 36px;
`;

const Bold = styled.span`
  font-family: 'ChosunSm';
  font-weight: 700;
  color: ${theme.colors.defaultFontColor} !important;
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.colors.grayFontColor};
  position: relative;
  transition: 0.3s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.blueColor};
    transition: width 0.4s ease-out;
  }

  &:hover {
    color: ${theme.colors.blueColor} !important;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Text = styled.div<{ isHovered?: boolean }>`
  font-family: 'ChosunNm';
  ${theme.typography.h1}
  line-height: 48px;
  max-width: 70%;
  transition: 0.3s ease-out;
  color: ${(props) => (props.isHovered ? theme.colors.defaultFontColor : theme.colors.grayFontColor)};
`;
