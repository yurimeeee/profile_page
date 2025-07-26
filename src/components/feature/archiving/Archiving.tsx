'use client';

import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import styled from 'styled-components';
import theme from '@styles/theme';

const Archiving = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="archiving">
      {/* <BackgroundText text="Archiving" top="0" desc={'경험과 지식을 저장하고 공유합니다.'} /> */}
      <BackgroundText text="Archiving" top="0" desc={'GitHub & Tech Blog'} />
      <FlexBox $gap="36px">
        <FlexBox
          data-aos="flip-down"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          $flexDirection={'column'}
          $padding={'30px 32px'}
          $bgColor={theme.colors.ultraLightGrayBgColor}
          $boxShadow={'2px 4px 12px #00000014'}
          $minHeight={320}
        >
          <Img src={`/images/archiving/git.svg`} alt={'github'} />
          <FlexBox $gap="40px" $flexDirection={'column'}>
            <Link href="https://github.com/yurimeeee" target="_blank">
              https://github.com/yurimeeee
            </Link>
            <Desc>
              {/* 소스 코드 저장소로
              <br /> 경험한 팀프로젝트, 개인 프로젝트의 코드 <br /> 학습 및 코딩 연습과 관련된 코드를 관리합니다. */}
              프로젝트 아카이브 <br /> 직접 경험한 팀 프로젝트와 개인 프로젝트의 코드를 정리한 저장소입니다. <br /> 기술적 시도와 문제 해결 과정을 코드에 담았습니다.
            </Desc>
          </FlexBox>
        </FlexBox>
        <FlexBox
          data-aos="flip-down"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          $flexDirection={'column'}
          $padding={'30px 32px'}
          $bgColor={theme.colors.ultraLightGrayBgColor}
          $boxShadow={'2px 4px 12px #00000014'}
          $minHeight={320}
        >
          <Img src={`/images/archiving/tstory.svg`} alt={'github'} />
          <FlexBox $gap="40px" $flexDirection={'column'}>
            <Link href="https://gr0wingdeveloper.tistory.com" target="_blank">
              https://gr0wingdeveloper.tistory.com
            </Link>
            <Desc>
              {/* 스스로 학습한 내용을 정리 및 지식 공유를 <br /> 목적으로 한 개인 블로그입니다. <br /> 주로 새로운 기술을 접목 시 작성합니다. */}
              학습의 기록과 공유 <br /> 스스로 학습한 내용을 정리하고, 공유하기 위한 개인 블로그입니다. <br /> 새로운 기술을 접목하거나, 문제를 해결한 내용을 중심으로 작성합니다.
            </Desc>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Wrap>
  );
};

export default Archiving;

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

const Link = styled.a`
  font-family: 'MontserratBold';
  font-weight: 700;
  ${theme.typography.h3};
  color: ${theme.colors.blueColor};
  margin-top: 20px;
`;
const Desc = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  ${theme.typography.h3};
`;

const Img = styled.img``;
