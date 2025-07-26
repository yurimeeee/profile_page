'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import styled from 'styled-components';
import theme from '@styles/theme';
import { useEffect } from 'react';

const Career = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrap id="career">
      <BackgroundText text="Career" top="0" />
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
        <Title>오내피플, Frontend Developer</Title>
        <Desc style={{ marginBottom: '20px' }}>2024.07 ~ 현재</Desc>

        <FlexBox $flexDirection={'column'} $gap="30px" $alignItems={'start'}>
          <div>
            <SubTitle>🔐 개인정보 수명관리 SaaS ‘캐치시큐’ 개발</SubTitle>
            <Desc>개인정보의 수집∙활용∙제공∙보관 전 과정을 디지털화한 수명관리 시스템 개발</Desc>
            <Desc>CSV 기반 대용량 개인정보 업로드 (최대 10만 건) → NLP 테이블 형식 자동 변환 및 유효성 검증 로직 개발</Desc>
            <Desc>전자서명 모듈 연동 및 본인인증 기능 구현 (KG이니시스 API 사용)</Desc>
            <Desc>ISMS-P 심사 대응: 보안페이지 내 API 호출 시 커스텀 인증 헤더 처리 등 보안 강화</Desc>
          </div>
          <div>
            <SubTitle>📄 설문 기능인 ‘캐치폼’ 성능 개선 및 UI 리뉴얼</SubTitle>
            <Desc>Redux store 구조 최적화: 설문 Form 입력 시 Index 기준 변경, Debounce 처리로 렌더링 최소화</Desc>
            <Desc>느린 입력 반응성 개선 → 사용자 경험 크게 향상</Desc>
            <Desc>응답 화면 UI 컴포넌트 전면 리팩토링: 디자인 시스템에 맞는 Form 컴포넌트 재구성 (단문형, 복수선택, 매트릭스 등)</Desc>
          </div>
          <div>
            <SubTitle>🛠 관리자 어드민 및 정책 페이지 개선</SubTitle>
            <Desc>개인정보 처리방침 생성/수정 페이지 성능 개선</Desc>
            <Desc>동의서/정책 페이지 리팩토링을 통해 사용자 편의성 및 유지보수성 향상</Desc>
            <Desc>결제 기능 리뉴얼: KG이니시스 결제 연동, 크레딧 시스템 및 부가 서비스 결제 처리 구현</Desc>
          </div>
          <div>
            <SubTitle>⏳ UX 향상을 위한 로딩 경험 개선</SubTitle>
            <Desc>전역적으로 Skeleton UI 및 로딩 스피너 도입 → 데이터 로딩 단계에서 사용자 인지 향상</Desc>
          </div>
        </FlexBox>
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
        <Title>플랫큐브, Frontend Developer</Title>
        <Desc style={{ marginBottom: '20px' }}>2023.12 ~ 2024.05</Desc>

        <FlexBox $flexDirection={'column'} $gap="30px" $alignItems={'start'}>
          <div>
            <SubTitle>🏢 무신사 내부 시스템 웹사이트 개발</SubTitle>
            <Desc>무신사 경영지원팀의 내부 업무 시스템 개발</Desc>
            <Desc>SSO 로그인 및 GraphQL API 연동</Desc>
            <Desc>대용량 데이터를 고려한 무한 스크롤 리스트 구현</Desc>
            <Desc>PC/Mobile 모두 대응하는 적응형 UI 설계 및 구축</Desc>
          </div>
          <div>
            <SubTitle>🩺 메디컬 소프트 웹사이트 리뉴얼</SubTitle>
            <Desc>병·의원 전산화 솔루션을 제공하는 기업의 웹사이트 리뉴얼 개발</Desc>
            <Desc>반응형 레이아웃 설계 및 접근성 개선 작업 수행</Desc>
          </div>
          <div>
            <SubTitle>🎀 패션비즈 웹사이트 리뉴얼</SubTitle>
            <Desc>패션 전문 미디어 웹사이트 리뉴얼 프로젝트 개발</Desc>
            <Desc>메인 화면의 기사 타입별 컴포넌트 개발</Desc>
            <Desc>어드민에서 자유롭게 편집 가능한 메인화면 섹션 배치 구조 설계</Desc>
            <Desc>다양한 디바이스 대응을 위한 반응형 헤더 UI 구현</Desc>
          </div>
        </FlexBox>
      </FlexBox>
    </Wrap>
  );
};

export default Career;

const Wrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 200px;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 200px;

  ${theme.devices.mobile} {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

const Title = styled.div`
  font-family: 'MontserratBold';
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 12px;
  color: ${theme.colors.blueColor};

  ${theme.devices.mobile} {
    font-size: 24px;
  }
`;

const SubTitle = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  ${theme.typography.h2};
  margin-bottom: 14px;

  ${theme.devices.mobile} {
    ${theme.typography.h3};
  }
`;

const Desc = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  ${theme.typography.h4};

  ${theme.devices.mobile} {
    ${theme.typography.h5};
  }
`;
