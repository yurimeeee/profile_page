'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from '@styles/theme';
import { FlexBox } from '@components/styled/StyledComponents';
import BackgroundText from '@components/share/BackgroundText';
import ProjectSlider from '@components/share/ProjectSlider';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const teamProjectList = [
    {
      img: '/images/site/dietip/dietip_main.png',
      title: '다이어팁',
      sub_title: '다이어터들을 위한 커뮤니티, "다이어팁"',
      desc: 'React로 구현한, 다이어터들을 위한 꿀팁과 식단을 공유하는 사이트 입니다. 로그인 후, 식단인증 게시물을 사진과 함께 업로드할 수 있습니다. 칼로리 사전 페이지에서는 검색한 음식에 대한 영양정보를 차트로 구현하였습니다.',
      date: '23. 11. 07 - 24. 01. 03 (4인)',
      site_url: 'https://yurimeeee.github.io/Diet-tip/',
      git: 'https://github.com/yurimeeee/Diet-tip',
    },
    {
      img: '/images/site/lms_user/lms_user_main.png',
      title: '코딩 강의 사이트, 푸딩',
      sub_title: '코딩 입문자를 위한 쉽게 떠먹는 사이트. ',
      desc: '편리한 UX/UI와 난이도, 카테고리 별 강의를 쉽게 접할 수 있는 학습사이트로, PHP와 MySQL을 이용하여 회원가입, 로그인, 메인페이지의 프론트엔드와 백엔드 구현.',
      date: '23. 09. 08 - 09. 25 (5인)',
      site_url: 'https://guide-page.dothome.co.kr/expiration.htmlpudding-LMS-website/user/index.php',
      git: 'https://github.com/hazel305/pudding-LMS-website',
    },
    {
      img: '/images/site/lms_admin/lms_admin_main.png',
      title: '학습지원시스템 어드민',
      sub_title: '초보 관리자도 사용할 수 있도록 깔끔하고 직관적인 UI를 활용한 LMS 관리자 사이트.',
      desc: 'LMS 관리자 페이지로 카테고리 관리, 카테고리 등록, 강의 리스트, 강의 상세보기를 담당하였습니다. (Admin ID: admin, PW: 1111) ',
      date: '23. 08. 14 - 23. 09. 08 (6인)',
      site_url: 'https://guide-page.dothome.co.kr/expiration.htmlpudding-LMS-website/admin/index.php',
      git: 'https://github.com/hazel305/pudding-LMS-website',
    },
    {
      img: '/images/site/lg/lg_main.png',
      title: 'LG GRAM 리뉴얼',
      sub_title: '제품을 돋보일 수 있는 인터렉티브한 효과',
      desc: '메뉴 개선을 통해 페이지 이용 시 사용성 증대 및 스크롤에 따른 interactive한 효과 적용 제품 필터링 및 검색 기능. 브랜드 소개, 고객지원, 공지사항, 매장찾기 페이지 담당하여 구현하였습니다.',
      date: '23. 07. 10 - 23. 08. 10 (4인)',
      site_url: 'https://yurimeeee.github.io/lg_gram_renewal_website/',
      git: 'https://github.com/yurimeeee/lg_gram_renewal_website',
    },
  ];

  const myProjectList = [
    {
      img: '/images/site/todo/todo_main.png',
      title: '투두 올, todo all',
      sub_title: '현대인의 스케줄 관리에 적합한 투두리스트.',
      desc: 'Supabase를 사용하여 일정 CRUD를 구현한 일정관리 web app. 전역 상태 관리는 zustand를 사용하였습니다. (현재 개발 진행중입니다.)',
      date: '24. 08. 14 ~ 24. 09. 08',
      site_url: 'https://todoall.vercel.app/',
      git: 'https://github.com/yurimeeee/todolist',
    },
    {
      img: '/images/site/meubles/meubles_main.png',
      title: 'Meubles mall',
      sub_title: '라이프 스타일 편집샵, "뮤블"',
      desc: '감도높은 라이프 스타일을 추구하는 20~40대를 위한 가구 편집샵 플랫폼을 개발하였습니다. Next.js와, Firebase를 활용하여 로그인, 회원가입 기능, 장바구니, 위시리스트, 쿠폰 발행 등의 기능이 구현되어 있습니다.',
      date: '24. 05. 11 ~ 24. 05. 20',
      site_url: 'https://meubles-mall.vercel.app/',
      git: 'https://github.com/yurimeeee/Meubles',
    },
    {
      img: '/images/site/nyang/nyang_main.png',
      title: 'MBTI 테스트',
      sub_title: '"어느날 갑자기 내가 고양이가 된다면.."',
      desc: 'React로 구현한 MBTI 테스트로, 카카오톡 결과 공유 기능으로 가까운 지인과 함께 간단하게 즐길 수 있습니다.',
      date: '23. 09. 08 - 09. 25 (5인)',
      site_url: 'https://yurimeeee.github.io/nyangcat-test/',
      git: 'https://github.com/yurimeeee/nyangcat-test',
    },
    {
      img: '/images/site/mmca/mmca_main.png',
      title: 'MMCA 리뉴얼 Web',
      sub_title: 'React로 제작한 MMCA(국립현대미술관) 반응형 리뉴얼 사이트.',
      desc: '심플한 디자인에 폰트 사이즈가 다소 큰 기존의 사이트를 적절한 폰트 사이즈와 효과로 리뉴얼. (추후 서브페이지 업데이트 예정입니다.☺️)',
      date: '23. 11. 04 - 23. 11. 08 ',
      site_url: 'https://yurimeeee.github.io/MMCA_renewal/',
      git: 'https://github.com/yurimeeee/MMCA_renewal',
    },
  ];

  return (
    <Wrap id="projects">
      <BackgroundText text="Projects" top="0" desc={'함께 또 따로 상상한 것을 구현해 나가는 것이 보람있고 즐겁습니다.'} center />
      <FlexBox
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
      </FlexBox>
      <FlexBox
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
        <Title>개인 프로젝트</Title>
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
