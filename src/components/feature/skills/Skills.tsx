'use client';

import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import styled from 'styled-components';
import theme from '@styles/theme';

const SKILL_LABELS: Record<string, string> = {
  react: 'React',
  'react-native': 'React Native',
  next: 'Next.js',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  graphql: 'GraphQL',
  jquery: 'jQuery',
  php: 'PHP',
  sass: 'Sass',
  less: 'Less',
  tailwind: 'Tailwind CSS',
  redux: 'Redux',
  zustand: 'Zustand',
  recoil: 'Recoil',
  apollo: 'Apollo',
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  figma: 'Figma',
  confluence: 'Confluence',
  jira: 'Jira',
};

const Skills = () => {
  const frontList = ['react', 'react-native', 'next', 'typescript', 'javascript', 'html', 'css', 'graphql', 'jquery', 'php', 'sass', 'less', 'tailwind'];
  const stateList = ['redux', 'zustand', 'recoil', 'apollo'];
  const etcList = ['photoshop', 'illustrator', 'figma', 'confluence', 'jira'];

  useEffect(() => {
    AOS.init();
  }, []);

  const renderSkillGroup = (list: string[], folder: string) => (
    <CustomFlex $gap="20px" $flexWrap="wrap" $justifyContent={'flex-start'}>
      {list.map((skill, idx) => (
        <SkillCard key={idx}>
          <SkillImg src={`/images/skill/${folder}/${skill}.svg`} alt={skill} />
          <SkillLabel>{SKILL_LABELS[skill] ?? skill}</SkillLabel>
        </SkillCard>
      ))}
    </CustomFlex>
  );

  return (
    <Wrap id="skills">
      <BackgroundText
        text="Skills"
        top="0"
        // desc={'아래 기술들을 활용해 사용자 경험을 만듭니다'}
      />
      <FlexBox
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>Frontend</Title>
        {renderSkillGroup(frontList, 'front')}
      </FlexBox>
      <FlexBox
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>State management</Title>
        {renderSkillGroup(stateList, 'state')}
      </FlexBox>
      <FlexBox
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'start'}
        $padding={'30px 24px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>Design / Communication</Title>
        {renderSkillGroup(etcList, 'etc')}
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

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 96px;
  padding: 16px 8px;
  border-radius: 12px;
  background-color: ${theme.colors.whiteColor};
  box-shadow: 2px 4px 10px #00000010;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 2px 8px 16px #00000020;
  }

  ${theme.devices.tablet} {
    width: 84px;
    padding: 14px 6px;
  }
  ${theme.devices.mobile} {
    width: 72px;
    padding: 12px 6px;
    gap: 8px;
  }
`;

const SkillImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;

  ${theme.devices.tablet} {
    width: 34px;
    height: 34px;
  }
  ${theme.devices.mobile} {
    width: 28px;
    height: 28px;
  }
`;

const SkillLabel = styled.span`
  font-family: 'ChosunNm';
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
  color: ${theme.colors.deepGrayFontColor};
  white-space: nowrap;

  ${theme.devices.mobile} {
    font-size: 11px;
  }
`;

const CustomFlex = styled(FlexBox)`
  row-gap: 16px;
`;
