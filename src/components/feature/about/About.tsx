'use client';

import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import Image from 'next/image';
import styled from 'styled-components';
import theme from '@styles/theme';
import { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState('');

  const handleMouseEnter = (value: string) => setIsHovered(value);
  const handleMouseLeave = () => setIsHovered('');

  return (
    <Wrap id="about">
      <BackgroundText text="About me" top="0" left="28%" />
      <CustomFlex $gap="40px">
        <Image src={'/images/about1.png'} alt="about_image" width={300} height={320} />
        <Text isHovered={isHovered == 'ceramic'}>
          <Bold
            onMouseEnter={() => {
              handleMouseEnter('ceramic');
            }}
            onMouseLeave={handleMouseLeave}
          >
            고민보단 실행, 시작이 곧 변화의 시작
          </Bold>
          <br />
          {/* 흙을 빚던 도예과 학생에서, 사용자 경험을 빚어내는 프론트엔드 개발자로. <br />
          새로운 도전을 두려워하지 않고 흥미로운 일에 주저 없이 뛰어드는 자세로 목표를 이뤄왔습니다. <br />
          기술은 빠르게 변화하지만, 저는 그 흐름을 유연하게 받아들이며 <br />
      
          창의적인 시각으로 문제를 해결하고, 사용자에게 더 나은 경험을 제공하는 개발을 지향하며 신뢰받는 개발자로 성장하겠습니다. */}
          흙을 빚던 도예과 학생에서, 사용자 경험을 빚어내는 프론트엔드 개발자로. <br />
          새로운 분야에도 망설임 없이 도전하고, 작은 실행이 큰 성장을 만든다는 것을 몸소 경험해왔습니다. <br />
          빠르게 변하는 기술 환경 속에서도 유연하게 대응하며, 사용자의 니즈를 깊이 이해하고 실질적인 해결책을 제시하는 것에 집중합니다. <br /> 앞으로도 신뢰받는 개발자로서,
          사용자의 일상에 가치를 더하는 기능과 경험을 만들어가겠습니다.
        </Text>
      </CustomFlex>
      <CustomFlex $gap="40px">
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
          <br />
          {/* 가장 좋아하는 영화 ‘토이 스토리’에서 <br />
          주인공 ‘버즈 라이트 이어‘가 하늘을 향해 비상할때 외치는 대사입니다. <br />
          ‘무한한 공간 저 너머로’라는 말 그대로. <br />
          끊임없이 성장해 나가는 실력 있는 개발자로 비상하겠습니다. */}
          {/* 가장 좋아하는 영화 토이 스토리에서 ‘버즈 라이트이어’가 외치는 이 대사는 <br />
          저의 성장 방향과도 닮아 있습니다. <br />
          '무한한 가능성 너머로' — 저는 주도적으로 문제를 해결하고 풍부한 상상력을 바탕으로 새로운 방향을 제시하며 끊임없이 성장할 것입니다. <br />
          또한 사용자 중심의 기능과 감각적인 UI/UX를 구현하는 실력 있는 개발자로 비상하겠습니다. */}
          영화 토이 스토리 속 '버즈 라이트이어'의 대사는 저에게 성장에 대한 믿음과 상상력의 방향을 일깨워 줍니다. <br /> 저는 단순한 기능 구현을 넘어, 풍부한 상상력으로 새로운
          가능성을 제안하며 문제를 주도적으로 해결하는 개발자가 되고자 합니다. <br />
          기능과 디자인, 기술과 감성의 균형을 맞추며 감각적인 UI/UX를 구현하는 프론트엔드 개발자로 비상하겠습니다.
        </Text>
      </CustomFlex>
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

  ${theme.devices.mobile} {
    padding: 0;
  }
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

  ${theme.devices.tablet} {
    ${theme.typography.h2}
    max-width: 100%;
    padding: 0 24px;
  }
  ${theme.devices.mobile} {
    ${theme.typography.h3}
    max-width: 100%;
    padding: 0 24px;
  }
`;

const CustomFlex = styled(FlexBox)`
  ${theme.devices.tablet} {
    flex-direction: column;
  }
  ${theme.devices.mobile} {
    flex-direction: column;
  }
`;
