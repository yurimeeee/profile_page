'use client';

import 'aos/dist/aos.css';

import { useEffect, useState } from 'react';

import AOS from 'aos';
import BackgroundText from '@components/share/BackgroundText';
import { FlexBox } from '@components/styled/StyledComponents';
import ProjectSlider from '@components/share/ProjectSlider';
import styled from 'styled-components';
import theme from '@styles/theme';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const teamProjectList = [
  //   {
  //     img: '/images/site/dietip/dietip_main.png',
  //     title: '다이어팁',
  //     sub_title: '다이어터들을 위한 커뮤니티, "다이어팁"',
  //     desc: 'React로 구현한, 다이어터들을 위한 꿀팁과 식단을 공유하는 사이트 입니다. 로그인 후, 식단인증 게시물을 사진과 함께 업로드할 수 있습니다. 칼로리 사전 페이지에서는 검색한 음식에 대한 영양정보를 차트로 구현하였습니다.',
  //     date: '23. 11. 07 - 24. 01. 03 (4인)',
  //     site_url: 'https://yurimeeee.github.io/Diet-tip/',
  //     git: 'https://github.com/yurimeeee/Diet-tip',
  //   },
  //   {
  //     img: '/images/site/lms_user/lms_user_main.png',
  //     title: '코딩 강의 사이트, 푸딩',
  //     sub_title: '코딩 입문자를 위한 쉽게 떠먹는 사이트. ',
  //     desc: '편리한 UX/UI와 난이도, 카테고리 별 강의를 쉽게 접할 수 있는 학습사이트로, PHP와 MySQL을 이용하여 회원가입, 로그인, 메인페이지의 프론트엔드와 백엔드 구현.',
  //     date: '23. 09. 08 - 09. 25 (5인)',
  //     site_url: 'https://guide-page.dothome.co.kr/expiration.htmlpudding-LMS-website/user/index.php',
  //     git: 'https://github.com/hazel305/pudding-LMS-website',
  //   },
  //   {
  //     img: '/images/site/lms_admin/lms_admin_main.png',
  //     title: '학습지원시스템 어드민',
  //     sub_title: '초보 관리자도 사용할 수 있도록 깔끔하고 직관적인 UI를 활용한 LMS 관리자 사이트.',
  //     desc: 'LMS 관리자 페이지로 카테고리 관리, 카테고리 등록, 강의 리스트, 강의 상세보기를 담당하였습니다. (Admin ID: admin, PW: 1111) ',
  //     date: '23. 08. 14 - 23. 09. 08 (6인)',
  //     site_url: 'https://guide-page.dothome.co.kr/expiration.htmlpudding-LMS-website/admin/index.php',
  //     git: 'https://github.com/hazel305/pudding-LMS-website',
  //   },
  //   {
  //     img: '/images/site/lg/lg_main.png',
  //     title: 'LG GRAM 리뉴얼',
  //     sub_title: '제품을 돋보일 수 있는 인터렉티브한 효과',
  //     desc: '메뉴 개선을 통해 페이지 이용 시 사용성 증대 및 스크롤에 따른 interactive한 효과 적용 제품 필터링 및 검색 기능. 브랜드 소개, 고객지원, 공지사항, 매장찾기 페이지 담당하여 구현하였습니다.',
  //     date: '23. 07. 10 - 23. 08. 10 (4인)',
  //     site_url: 'https://yurimeeee.github.io/lg_gram_renewal_website/',
  //     git: 'https://github.com/yurimeeee/lg_gram_renewal_website',
  //   },
  // ];

  // const myProjectList = [
  //   {
  //     img: '/images/site/wedding_invi/wedding_invi_main.png',
  //     title: '모바일 청첩장 제작 웹앱',
  //     sub_title: '마이 웨딩, My Wedding Invitation',
  //     desc: '직접 모바일 청첩장을 쉽고 빠르게 제작하는 web app.',
  //     date: '25. 05. 23',
  //     site_url: 'https://my-wedding-invitation-rust.vercel.app/',
  //     git: 'https://github.com/yurimeeee/wedding-invitation',
  //   },
  //   {
  //     img: '/images/site/todo/todo_main.png',
  //     title: '투두 올, todo all',
  //     sub_title: '현대인의 스케줄 관리에 적합한 투두리스트.',
  //     desc: 'Supabase를 사용하여 일정 CRUD를 구현한 일정관리 web app. 전역 상태 관리는 zustand를 사용하였습니다. (현재 개발 진행중입니다.)',
  //     date: '24. 08. 14 ~ 24. 09. 08',
  //     site_url: 'https://todoall.vercel.app/',
  //     git: 'https://github.com/yurimeeee/todolist',
  //   },
  //   {
  //     img: '/images/site/coin_lab/coin_lab_main.png',
  //     title: '업비트 Api 활용 코인 거래소 웹앱',
  //     sub_title: '코인랩, coin lab',
  //     desc: '업비트 Api 활용 코인 거래소 웹앱. 코인 시세, 거래량, 거래소 정보 등을 확인할 수 있습니다.',
  //     date: '진행중',
  //     // site_url: 'https://todoall.vercel.app/',
  //     git: 'https://github.com/yurimeeee/Upbit_Api',
  //   },
  //   {
  //     img: '/images/site/meubles/meubles_main.png',
  //     title: 'Meubles mall',
  //     sub_title: '라이프 스타일 편집샵, "뮤블"',
  //     desc: '감도높은 라이프 스타일을 추구하는 20~40대를 위한 가구 편집샵 플랫폼을 개발하였습니다. Next.js와, Firebase를 활용하여 로그인, 회원가입 기능, 장바구니, 위시리스트, 쿠폰 발행 등의 기능이 구현되어 있습니다.',
  //     date: '24. 05. 11 ~ 24. 05. 20',
  //     site_url: 'https://meubles-mall.vercel.app/',
  //     git: 'https://github.com/yurimeeee/Meubles',
  //   },
  //   {
  //     img: '/images/site/nyang/nyang_main.png',
  //     title: 'MBTI 테스트',
  //     sub_title: '"어느날 갑자기 내가 고양이가 된다면.."',
  //     desc: 'React로 구현한 MBTI 테스트로, 카카오톡 결과 공유 기능으로 가까운 지인과 함께 간단하게 즐길 수 있습니다.',
  //     date: '23. 09. 08 - 09. 25 (5인)',
  //     site_url: 'https://yurimeeee.github.io/nyangcat-test/',
  //     git: 'https://github.com/yurimeeee/nyangcat-test',
  //   },
  //   {
  //     img: '/images/site/mmca/mmca_main.png',
  //     title: 'MMCA 리뉴얼 Web',
  //     sub_title: 'React로 제작한 MMCA(국립현대미술관) 반응형 리뉴얼 사이트.',
  //     desc: '심플한 디자인에 폰트 사이즈가 다소 큰 기존의 사이트를 적절한 폰트 사이즈와 효과로 리뉴얼. (추후 서브페이지 업데이트 예정입니다.☺️)',
  //     date: '23. 11. 04 - 23. 11. 08 ',
  //     site_url: 'https://yurimeeee.github.io/MMCA_renewal/',
  //     git: 'https://github.com/yurimeeee/MMCA_renewal',
  //   },
  // ];

  const myProjectList = [
    {
      img: '/images/site/smart-shopping-platform/main.png',
      title: 'PickS',
      sub_title: 'AI 쇼핑 큐레이터',
      desc: '상품 링크만 붙여넣으면 AI가 비교·추천·리뷰 분석까지 제공하는 쇼핑 큐레이션 서비스입니다. 네이버 쇼핑 API로 실제 상품 데이터를 연동하고, Gemini API 기반으로 상황별 큐레이션과 구매 판단을 돕는 리포트를 생성합니다. Firebase 인증, Zustand 상태 관리, 위시리스트·마이페이지 기능을 포함합니다.',
      site_url: 'https://smart-shopping-agent-34al.vercel.app/',
      git: 'https://github.com/yurimeeee/smart-shopping-agent',
    },
    {
      img: '/images/site/hue-flow/main.png',
      title: 'HueFlow',
      sub_title: '컬러 하모니 & 그래디언트 생성 툴',
      desc: '컬러 하모니 생성, 그래디언트 빌더, AI 테마 검색을 한 화면에서 사용할 수 있는 컬러 도구입니다. Hex/RGB/HSL/HSB 입력으로 6가지 조화 알고리즘 기반 팔레트를 생성하고, Gemini 2.5 Flash에 자연어로 팔레트를 요청할 수 있으며, 멀티 color stop 그래디언트를 CSS로 바로 복사할 수 있습니다.',
      site_url: 'https://hue-flow.vercel.app',
      git: 'https://github.com/yurimeeee/hue-flow',
    },
    {
      img: '/images/site/one_bite_jp/one_bite_login.png',
      images: [
        '/images/site/one_bite_jp/one_bite_login.png',
        '/images/site/one_bite_jp/one_bite_study1.png',
        '/images/site/one_bite_jp/one_bite_study2.png',
        '/images/site/one_bite_jp/one_bite_study3.png',
        '/images/site/one_bite_jp/one_bite_study4.png',
        '/images/site/one_bite_jp/one_bite_study5.png',
        '/images/site/one_bite_jp/one_bite_study6.png',
        '/images/site/one_bite_jp/one_bite_study7.png',
        '/images/site/one_bite_jp/one_bite_study_result.png',
        '/images/site/one_bite_jp/one_bite_blank_quiz1.png',
        '/images/site/one_bite_jp/one_bite_blank_quiz2.png',
        '/images/site/one_bite_jp/one_bite_attendance.png',
        '/images/site/one_bite_jp/one_bite_mypage.png',
      ],
      title: 'One Bite JP',
      sub_title: '한 입씩 배우는 일본어 앱',
      desc: '단계별 입문 커리큘럼으로 일본어를 학습할 수 있는 React Native 앱입니다. 단어 맞추기·빈칸 채우기 퀴즈로 재미있게 학습하고, 출석 체크로 학습 습관을 관리하며, 오답노트에 틀린 문제를 저장해 언제든 복습할 수 있습니다.',
      git: 'https://github.com/yurimeeee/onebite-jp-app',
      demo_url: '/images/site/one_bite_jp/one_bite_demo.mp4',
    },
    {
      img: '/images/site/kanban/kanban-about.png',
      title: 'Kanban Board',
      sub_title: '드래그 앤 드롭 업무 관리 앱',
      desc: 'React와 TypeScript로 구현한 칸반 보드 웹 애플리케이션입니다. 할 일·진행 중·완료 등 단계별로 카드를 관리하며, 드래그 앤 드롭으로 직관적인 업무 흐름을 제공합니다.',
      site_url: 'https://kanban-board-six-zeta.vercel.app/',
      git: 'https://github.com/yurimeeee/kanban-board',
    },
    {
      img: '/images/site/wedding_invi/wedding_invi_main.png',
      title: '모바일 청첩장 제작 웹앱',
      sub_title: '마이 웨딩, My Wedding Invitation',
      desc: '사용자가 직접 모바일 청첩장을 생성할 수 있는 웹 애플리케이션입니다. 다양한 템플릿 기반으로 사용자 맞춤형 디자인과 텍스트 입력이 가능하며, 반응형 UI로 모바일 환경에 최적화되어 있습니다. React와 styled-components를 기반으로 구현하였으며, Vercel을 통해 배포하였습니다.',
      date: '25. 05. 23',
      site_url: 'https://my-wedding-invitation-rust.vercel.app/',
      git: 'https://github.com/yurimeeee/wedding-invitation',
    },
    {
      img: '/images/site/todo/todo_main.png',
      title: '투두 올, todo all',
      sub_title: '현대인의 스케줄 관리에 적합한 투두리스트',
      desc: 'Supabase를 이용한 백엔드 연동을 통해 사용자 인증 및 일정 CRUD 기능을 구현한 일정 관리 웹 애플리케이션입니다. 상태 관리는 Zustand를 활용하였고, 모던한 UI와 UX 설계를 기반으로 일정을 효율적으로 관리할 수 있는 인터페이스를 제공합니다.',
      date: '24. 08. 14 ~ 24. 09. 08',
      site_url: 'https://todoall.vercel.app/',
      git: 'https://github.com/yurimeeee/todolist',
    },
    {
      img: '/images/site/coin_lab/trade.png',
      title: 'Virtual Trading App',
      sub_title: '모의 투자 코인 거래 웹앱',
      desc: '실제 자산 없이 가상의 KRW 잔고로 코인 매수·매도를 연습할 수 있는 모의 투자 거래소 웹앱입니다. 실시간 시세와 캔들 차트, 호가창을 제공하며, 지정가·시장가 주문과 보유 자산·평가손익을 확인할 수 있습니다.',
      site_url: 'https://virtual-trading-app-taupe.vercel.app/',
      git: 'https://github.com/yurimeeee/virtual-trading-app',
    },
    // {
    //   img: '/images/site/meubles/meubles_main.png',
    //   title: 'Meubles mall',
    //   sub_title: '라이프스타일 편집샵, "뮤블"',
    //   desc: 'Next.js와 Firebase를 활용한 가구 및 생활용품 쇼핑몰 플랫폼입니다. 사용자 인증, 장바구니, 위시리스트, 쿠폰 발급 등 전자상거래 핵심 기능을 구현하였으며, 반응형 UI로 다양한 디바이스에서도 최적의 사용자 경험을 제공합니다.',
    //   date: '24. 05. 11 ~ 24. 05. 20',
    //   site_url: 'https://meubles-mall.vercel.app/',
    //   git: 'https://github.com/yurimeeee/Meubles',
    // },
    {
      img: '/images/site/cat-mbti-test/main.png',
      images: [
        '/images/site/cat-mbti-test/main.png',
        '/images/site/cat-mbti-test/question.png',
        '/images/site/cat-mbti-test/result.png',
      ],
      title: 'Nyang-BTI',
      sub_title: '나는 어떤 고양이 유형일까?',
      desc: 'React Native(Expo)와 TypeScript로 구현한 고양이 MBTI 테스트 앱입니다. 12가지 질문으로 16가지 고양이 유형 결과를 제공하며, 유형별 장단점과 궁합 유형을 안내합니다. 진행률 표시, 카카오톡 공유·링크 복사 기능을 지원하며 모바일과 웹 모두 반응형으로 최적화되어 있습니다.',
      site_url: 'https://cat-mbti-test-phi.vercel.app/',
      git: 'https://github.com/yurimeeee/cat-mbti-test',
    },
    // {
    //   img: '/images/site/mmca/mmca_main.png',
    //   title: 'MMCA 리뉴얼 Web',
    //   sub_title: '국립현대미술관 리디자인 웹사이트',
    //   desc: '기존 국립현대미술관 사이트의 UI/UX 문제점을 분석하고, 반응형 레이아웃과 타이포그래피 중심의 모던한 디자인으로 리디자인한 프로젝트입니다. React를 기반으로 컴포넌트화하여 유지보수성과 확장성을 고려하였으며, 추후 서브페이지 추가를 계획 중입니다.',
    //   date: '23. 11. 04 - 23. 11. 08 ',
    //   site_url: 'https://yurimeeee.github.io/MMCA_renewal/',
    //   git: 'https://github.com/yurimeeee/MMCA_renewal',
    // },
  ];

  return (
    <Wrap id="projects">
      <BackgroundText
        text="Projects"
        top="0"
        // desc={'진행한 사이드 프로젝트입니다'}
        center
      />
      {/* <FlexBox
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'center'}
        $justifyContent={'center'}
        $padding={'30px 32px 90px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        <Title>팀 프로젝트</Title>
        <ProjectSlider list={teamProjectList} />
      </FlexBox> */}
      <FlexBox
        data-aos-once={true}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        $flexDirection={'column'}
        $alignItems={'center'}
        $justifyContent={'center'}
        $padding={'30px 32px 90px'}
        $bgColor={theme.colors.ultraLightGrayBgColor}
        $boxShadow={'2px 4px 12px #00000014'}
      >
        {/* <Title>개인 프로젝트</Title> */}
        <ProjectSlider list={myProjectList} />
      </FlexBox>
    </Wrap>
  );
};

export default Projects;

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
  font-size: 30px;
  font-family: 'ChosunNm';
  font-weight: 900;
  margin-bottom: 48px;
`;
