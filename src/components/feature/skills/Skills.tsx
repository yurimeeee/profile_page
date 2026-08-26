'use client';

import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
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

const CATEGORIES = [
  { key: 'front', label: 'Frontend', list: ['react', 'react-native', 'next', 'typescript', 'javascript', 'html', 'css', 'graphql', 'jquery', 'php', 'sass', 'less', 'tailwind'] },
  { key: 'state', label: 'State management', list: ['redux', 'zustand', 'recoil', 'apollo'] },
  { key: 'etc', label: 'Design / Communication', list: ['photoshop', 'illustrator', 'figma', 'confluence', 'jira'] },
] as const;

const Skills = () => {
  const [activeKey, setActiveKey] = useState<(typeof CATEGORIES)[number]['key']>('front');
  const active = CATEGORIES.find((category) => category.key === activeKey) ?? CATEGORIES[0];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="skills">
      <BackgroundText
        text="Skills"
        top="0"
        // desc={'아래 기술들을 활용해 사용자 경험을 만듭니다'}
      />

      <Panel data-aos-once={true} data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
        <TabRow>
          {CATEGORIES.map((category) => (
            <Tab key={category.key} type="button" $active={category.key === activeKey} onClick={() => setActiveKey(category.key)}>
              {category.label}
            </Tab>
          ))}
        </TabRow>

        <PillGrid key={active.key}>
          {active.list.map((skill, idx) => (
            <Pill key={idx}>
              <PillLabel>{SKILL_LABELS[skill] ?? skill}</PillLabel>
            </Pill>
          ))}
        </PillGrid>
      </Panel>
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
  padding-top: 300px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 200px;

  ${theme.devices.mobile} {
    padding-top: 160px;
    padding-bottom: 100px;
  }
`;

const Panel = styled.div`
  width: 100%;
  max-width: 900px;
`;

const TabRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 36px;
  border-bottom: 1px solid ${theme.colors.lightGrayBorderColor};
  margin-bottom: 40px;

  ${theme.devices.mobile} {
    gap: 10px 20px;
    margin-bottom: 28px;
  }
`;

const Tab = styled.button<{ $active: boolean }>`
  position: relative;
  font-family: 'MontserratBold';
  font-weight: 700;
  font-size: 20px;
  white-space: nowrap;
  padding: 0 2px 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.$active ? theme.colors.blueColor : theme.colors.lightGrayFontColor)};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 2px;
    background-color: ${theme.colors.blueColor};
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transform-origin: left center;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${theme.colors.blueColor};
  }

  ${theme.devices.mobile} {
    font-size: 15px;
    padding-bottom: 14px;
  }
`;

const fadeInAnimation = `
  @keyframes skillFadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PillGrid = styled.div`
  ${fadeInAnimation}
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  animation: skillFadeIn 0.4s ease;
`;

const Pill = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 22px;
  border-radius: 999px;
  border: 1px solid ${theme.colors.lightGrayBorderColor};
  background-color: ${theme.colors.whiteColor};
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${theme.colors.blueColor};
    transform: translateY(-3px);
    box-shadow: 2px 6px 14px #00000014;
  }

  ${theme.devices.mobile} {
    padding: 9px 16px;
  }
`;

const PillLabel = styled.span`
  font-family: 'ChosunNm';
  font-weight: 400;
  font-size: 15px;
  line-height: 1.3;
  white-space: nowrap;
  color: ${theme.colors.darkGrayFontColor};

  ${theme.devices.mobile} {
    font-size: 13px;
  }
`;
