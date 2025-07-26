'use client';

import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import theme from '@styles/theme';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 스크롤 이벤트를 감지하여 섹션 활성화
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['#about', '#skills', '#career', '#archiving', '#projects', '#contact'];
      let active = null;
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 뷰포트 상단에 가까운 섹션을 활성화
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            active = section;
            break;
          }
        }
      }
      setActiveSection(active);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScrollEvent);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <Wrap>
      <Logo onClick={() => router.push('/')}>u.rim</Logo>
      <GnB>
        <GnbItem onClick={() => handleScroll('#about')} className={activeSection === '#about' ? 'active' : ''}>
          About me
        </GnbItem>
        <GnbItem onClick={() => handleScroll('#skills')} className={activeSection === '#skills' ? 'active' : ''}>
          Skills
        </GnbItem>
        <GnbItem onClick={() => handleScroll('#career')} className={activeSection === '#career' ? 'active' : ''}>
          Career
        </GnbItem>
        <GnbItem onClick={() => handleScroll('#archiving')} className={activeSection === '#archiving' ? 'active' : ''}>
          Archiving
        </GnbItem>
        <GnbItem onClick={() => handleScroll('#projects')} className={activeSection === '#projects' ? 'active' : ''}>
          Projects
        </GnbItem>
        <GnbItem onClick={() => handleScroll('#contact')} className={activeSection === '#contact' ? 'active' : ''}>
          Contact
        </GnbItem>
      </GnB>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: 'ChosunNm';
  padding: 16px 36px;
  /* background-color: ${theme.colors.whiteColor}; */
  background-color: #ffffffc2;
`;
const Logo = styled.h1`
  cursor: pointer;
  ${theme.typography.h1}
  font-weight: 900;
`;

const GnB = styled.ul`
  display: flex;
  gap: 24px;
  height: 24px;

  ${theme.devices.mobile} {
    display: none;
  }
`;

const GnbItem = styled.li`
  font-size: 20px;
  line-height: 20px;
  color: ${theme.colors.defaultFontColor};
  font-weight: 500;
  position: relative;
  transition: 0.3s ease-out;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.blueColor};
    font-weight: 700;
  }

  &.active {
    color: ${theme.colors.blueColor};
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: ${theme.colors.blueColor};
    transition: width 0.4s ease-out;
  }

  &.active::after {
    width: 100%;
  }
`;
