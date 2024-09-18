import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Libre_Bodoni, Montserrat } from 'next/font/google';
import StyledComponentsRegistry from '@lib/StyledComponentsRegistry';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import ScrollToTopButton from '@components/share/ScrollToTopButton';

// export const libreBodoni = Libre_Bodoni({
//   subsets: ['latin'],
//   variable: '--font-libre',
//   display: 'swap',
// });

// export const montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-montserrat',
//   display: 'swap',
// });

// export const chosunNm = localFont({
//   src: '../fonts/ChosunNm.woff',
//   variable: '--font-ChosunNm',
//   // weight: '100 900',
//   weight: '100 400 500 900',
// });
// export const chosunSm = localFont({
//   src: '../fonts/ChosunSm.woff',
//   variable: '--font-chosunSm',
//   // weight: '100 900',
//   weight: '100 400 500 900',
// });

export const metadata: Metadata = {
  title: '김유림 | 프론트엔드 개발자 포트폴리오',
  description: '프론트엔드 개발자 김유림의 포트폴리오 페이지 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
      // className={`${libreBodoni.className} ${montserrat.className} ${chosunNm.variable} ${chosunSm.variable}`}
      >
        <StyledComponentsRegistry>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
