import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default createGlobalStyle`
  ${reset};
  
  

  @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;700&family=Montserrat:wght@400;700&display=swap');

  @font-face {
    font-family: 'PretendardRegular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PretendardMedium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'ChosunNm';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'ChosunSm';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.1/ChosunSm.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  } 

  @font-face {
    font-family: 'LibreBodoniRegular';
    src: url('https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
  } 

  @font-face {
    font-family: 'LibreBodoniBold';
    /* src: url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@700&display=swap') format('woff'); */
    src: url('/fonts/Libre_Bodoni/LibreBodoni-VariableFont_wght') format('truetype');
    font-weight: 700;
    font-style: normal;
  } 

  @font-face {
    font-family: 'MontserratRegular';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
  } 

  @font-face {
    font-family: 'MontserratBold';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  

  * {
    box-sizing: border-box;
    
    //&::-webkit-scrollbar {
    //  display: none;
    //}
    //
    //-ms-overflow-style: none; /* 인터넷 익스플로러 */
    //scrollbar-width: none; /* 파이어폭스 */
  }

  body {
    /* font-family: 'MontserratRegular', 'Roboto', sans-serif; */
    /* font-family: 'PretendardRegular', 'Libre Bodoni', 'Montserrat', sans-serif; */
    font-family: 'PretendardRegular', 'Libre Bodoni', 'Montserrat', sans-serif;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.defaultFontColor};

    ${({ theme }) => theme.devices.mobile} {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    ${({ theme }) => theme.devices.tablet} {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    ${({ theme }) => theme.devices.desktop} {
  -ms-overflow-style: none !important; /* IE와 Edge */
  scrollbar-width: none !important; /* 파이어폭스 */

  &::-webkit-scrollbar {
    width: 4px;
    height: 0; /* 스크롤바 높이를 0으로 설정해 스크롤바 화살표를 제거합니다 */
  }

  &::-webkit-scrollbar-track {
    background: transparent !important; /* 스크롤바 트랙을 투명하게 설정 */
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
    theme.colors.deepNavyBlueBgColor} !important; /* 스크롤바의 색상 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바 핸들 호버 시 색상 */
  }
}
    
  }

  a {
    color: ${({ theme }) => theme.colors.blackColor};
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    font-size: 16px;
    font-family: 'PretendardRegular';
    border: none;
    outline: none;
    background-color: inherit;

    &::placeholder {
      font-size: 14px;
      font-family: 'PretendardRegular', 'Roboto', sans-serif;
    }
    
    &:disabled {
      color: ${({ theme }) => theme.colors.blackColor};
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  button {
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.whiteColor};
  }

  select {
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

`;
