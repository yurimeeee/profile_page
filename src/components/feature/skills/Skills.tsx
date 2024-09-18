'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from '@styles/theme';
import { FlexBox } from '@components/styled/StyledComponents';
import BackgroundText from '@components/share/BackgroundText';

const Skills = () => {
  const frontList = ['react', 'next', 'typescript', 'javascript', 'html', 'css', 'graphql', 'jquery', 'php', 'sass', 'less', 'tailwind'];
  const stateList = ['redux', 'zustand', 'recoil', 'apollo'];
  const etcList = ['photoshop', 'illustrator', 'figma', 'confluence', 'jira'];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="skills">
      <BackgroundText text="Skills" top="0" desc={'이러한 기술들로 개발합니다.'} />
      <FlexBox
        // data-aos="fade-up"
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
        <FlexBox $gap="30px" $flexWrap="wrap" $justifyContent={'center'}>
          {frontList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/front/${skill}.svg`} alt={skill} />
          ))}
        </FlexBox>
      </FlexBox>
      <FlexBox
        // data-aos="fade-up"
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
        <FlexBox $gap="50px" $flexWrap="wrap" $justifyContent={'center'}>
          {stateList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/state/${skill}.svg`} alt={skill} />
          ))}
        </FlexBox>
      </FlexBox>
      <FlexBox
        // data-aos="fade-up"
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
        <FlexBox $gap="50px" $flexWrap="wrap" $justifyContent={'center'}>
          {etcList.map((skill, idx) => (
            <SkillImg key={idx} src={`/images/skill/etc/${skill}.svg`} alt={skill} />
          ))}
        </FlexBox>
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
`;

const Title = styled.div`
  font-family: 'MontserratBold';
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 32px;
  color: ${theme.colors.blueColor};
`;

const SkillImg = styled.img``;
