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
        <Title>캐치시큐, Frontend Developer</Title>
        <Desc style={{ marginBottom: '8px' }}>2024.06 ~ 재직중</Desc>
        <TechStack>React · TypeScript · Redux · Tailwind CSS · Styled-Components · Sass · Chart.js</TechStack>
        <Desc style={{ marginBottom: '4px' }}>각 기능별 백엔드 1인과 협업하며 화면 구조를 주도적으로 설계 및 구현</Desc>
        <Desc style={{ marginBottom: '4px' }}>캐치시큐 사이트 및 어드민 개발, AWS/NCP 환경 운영</Desc>
        <Desc style={{ marginBottom: '20px' }}>기획자와 사용자 경험에 대해 적극적으로 커뮤니케이션하며 기능 개선 방향 제안</Desc>

        <FlexBox $flexDirection={'column'} $gap="30px" $alignItems={'start'}>
          <div>
            <SubTitle>💳 결제 기능 개선 및 본인인증 로직 개발</SubTitle>
            <Period>2024.10 ~ 2024.12</Period>
            <Desc>라이선스 페이지, 구독 관리, 결제 수단 및 내역 관리 화면 개발</Desc>
            <Desc>KG이니시스 결제 인증 로직 개발 및 통합</Desc>
            <Desc>전체 결제 흐름 개선으로 사용자 편의성 향상 및 추가 기능 개발</Desc>
          </div>
          <div>
            <SubTitle>🌐 다국어 지원 기능 구현</SubTitle>
            <Period>2024.07 ~ 2024.08</Period>
            <Desc>i18n 라이브러리를 활용한 서비스 전면 다국어 처리</Desc>
            <Desc>약 700개 이상 컴포넌트 및 페이지 텍스트 다국어 적용</Desc>
          </div>
          <div>
            <SubTitle>⏳ Skeleton 컴포넌트 개발</SubTitle>
            <Period>2025.03</Period>
            <Desc>API 응답 지연 구간 UX 개선을 위한 Skeleton 컴포넌트 개발</Desc>
            <Desc>최소 노출 시간 설정 HOC 패턴 적용으로 빠른 응답에도 안정적인 사용자 경험 유지</Desc>
          </div>
          <div>
            <SubTitle>🎨 디자인 시스템 유지보수 및 반응형 UI 적용</SubTitle>
            <Period>2024.12 ~ 2025.03</Period>
            <Desc>공통 컴포넌트 구조 설계 및 코드 재사용성 향상</Desc>
            <Desc>다양한 해상도 대응을 위한 반응형 레이아웃 구성</Desc>
          </div>
          <div>
            <SubTitle>🔐 개인정보 업로드 수명관리 기능 개발</SubTitle>
            <Period>2025.06</Period>
            <Desc>CSV 기반 대용량 개인정보 업로드 및 파싱 (최대 10만 건)</Desc>
            <Desc>파싱 결과를 테이블 형식으로 자동 변환하여 개인정보 수명관리하는 기능 개발</Desc>
          </div>
          <div>
            <SubTitle>📊 대시보드 리뉴얼</SubTitle>
            <Period>2025.04</Period>
            <Desc>Chart.js 기반 대시보드 개발</Desc>
            <Desc>개인정보 수집 현황 및 라이선스 관리 시각화</Desc>
            <Desc>UX 개선 및 정보 가시성 대폭 향상</Desc>
          </div>
          <div>
            <SubTitle>🔗 이기종 간 통합보안 솔루션 개발</SubTitle>
            <Period>2025.07 ~ 2025.10</Period>
            <Desc>타 보안 솔루션과의 연동 및 통합 개발</Desc>
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
            <SubTitle>🏢 무신사 내부 업무 시스템 개발</SubTitle>
            <Period>2023.12 ~ 2024.03</Period>
            <Desc>무신사 경영지원팀의 내부 사용 웹사이트 100% 개발</Desc>
            <Desc>SSO 로그인 및 GraphQL API 연동</Desc>
            <Desc>대용량 데이터를 고려한 무한 스크롤 구현</Desc>
            <Desc>PC/Mobile 환경 모두 대응하는 적응형 UI 구축</Desc>
          </div>
          <div>
            <SubTitle>🩺 메디컬 소프트 웹사이트 리뉴얼</SubTitle>
            <Period>2024.03 ~ 2024.04</Period>
            <Desc>병·의원 전산화 전문 업체의 공식 웹사이트 전면 리뉴얼</Desc>
            <Desc>반응형 웹 구현 및 페이지 접근성 개선</Desc>
          </div>
          <div>
            <SubTitle>🎀 패션비즈 웹사이트 리뉴얼</SubTitle>
            <Period>2024.04 ~ 2024.05</Period>
            <Desc>패션 전문 미디어 사이트 리뉴얼 프로젝트 참여</Desc>
            <Desc>메인 화면의 타입별 기사 컴포넌트 개발</Desc>
            <Desc>관리자 어드민에서 커스터마이징 가능한 섹션 배치 구조 구현</Desc>
            <Desc>반응형 헤더 UI 개발</Desc>
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
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 14px;

  ${theme.devices.mobile} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Desc = styled.div`
  font-family: 'ChosunNm';
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  ${theme.devices.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Period = styled.div`
  font-family: 'ChosunNm';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.grayFontColor};
  margin-bottom: 10px;

  ${theme.devices.mobile} {
    font-size: 12px;
  }
`;

const TechStack = styled.div`
  font-family: 'ChosunNm';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.blueColor};
  margin-bottom: 12px;

  ${theme.devices.mobile} {
    font-size: 12px;
  }
`;
