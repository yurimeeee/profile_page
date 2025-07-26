'use client';

import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import styled from 'styled-components';
import theme from '@styles/theme';

const Skills = () => {
  const frontList = ['react', 'next', 'typescript', 'javascript', 'html', 'css', 'graphql', 'jquery', 'php', 'sass', 'less', 'tailwind'];
  const stateList = ['redux', 'zustand', 'recoil', 'apollo'];
  const etcList = ['photoshop', 'illustrator', 'figma', 'confluence', 'jira'];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="skills">
      <BackgroundText text="Skills" top="0" desc={'아래 기술들을 활용해 사용자 경험을 만듭니다'} />
      <FlexBox
        data-aos-once={true}
        data-aos="flip-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>Frontend</Title>
        <CustomFlex $gap="30px" $flexWrap="wrap" $justifyContent={'center'}>
          {frontList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/front/${skill}.svg`} alt={skill} />
          ))}
        </CustomFlex>
      </FlexBox>
      <FlexBox
        data-aos-once={true}
        data-aos="flip-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>State management</Title>
        <CustomFlex $gap="50px" $flexWrap="wrap" $justifyContent={'center'}>
          {stateList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/state/${skill}.svg`} alt={skill} />
          ))}
        </CustomFlex>
      </FlexBox>
      <FlexBox
        data-aos-once={true}
        data-aos="flip-down"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>Design / Communication</Title>
        <CustomFlex $gap="50px" $flexWrap="wrap" $justifyContent={'center'}>
          {etcList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/etc/${skill}.svg`} alt={skill} />
          ))}
        </CustomFlex>
      </FlexBox>
    </Wrap>
  );
};

export default Skills;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 300px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 200px;

  ${theme.devices.mobile} {
    padding-top: 160px;
    padding-bottom: 100px;
  }
`;

const Title = styled.div`
  font-family: 'MontserratBold';
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 32px;
  color: ${theme.colors.blueColor};

  ${theme.devices.mobile} {
    font-size: 24px;
  }
`;

const SkillImg = styled.img`
  ${theme.devices.tablet} {
    scale: 0.8;
  }
  ${theme.devices.mobile} {
    scale: 0.6;
  }
`;
const CustomFlex = styled(FlexBox)`
  ${theme.devices.tablet} {
    gap: 20px;
  }
  ${theme.devices.mobile} {
    gap: 20px;
  }
`;
