'use client';

import About from '@components/feature/about/About';
import Archiving from '@components/feature/archiving/Archiving';
import Career from '@components/feature/career/Career';
import Contact from '@components/feature/contact/Contact';
import { FlexBox } from '@components/styled/StyledComponents';
import Main from '@components/feature/main/Main';
import Projects from '@components/feature/projects/Projects';
import Skills from '@components/feature/skills/Skills';
import styled from 'styled-components';
import theme from '@styles/theme';

export default function Home() {
  return (
    <>
      <Main />
      <CustomFlex $flexDirection="column">
        <About />
        <Skills />
        <Career />
        <Archiving />
        <Projects />
        <Contact />
      </CustomFlex>
    </>
  );
}

const CustomFlex = styled(FlexBox)`
  ${theme.devices.tablet} {
    gap: 120px;
  }
  ${theme.devices.mobile} {
    gap: 120px;
  }
`;
