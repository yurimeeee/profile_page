import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FlexBox } from '@components/styled/StyledComponents';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import theme from '@styles/theme';

interface SlideItems {
  img: string;
  images?: string[];
  title: string;
  sub_title: string;
  desc: string;
  date: string;
  site_url?: string;
  git: string;
  demo_url?: string;
}
interface ProjectSliderProps {
  list: SlideItems[];
}

const AutoImageSlide = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Image
      src={images[current]}
      alt=""
      width={600}
      height={400}
      style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto', objectFit: 'contain', transition: 'opacity 0.3s ease' }}
      unoptimized
    />
  );
};

const ProjectSlider = ({ list }: ProjectSliderProps) => {
  const [demoVideo, setDemoVideo] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    draggable: true,
  };

  return (
    <>
      <Wrapper>
        <StyledSlider {...settings}>
          {list.map((slide: SlideItems, index: number) => (
            <SlideWrap key={index}>
              <ImageContainer>
                {slide.images && slide.images.length > 0 ? (
                  <AutoImageSlide images={slide.images} />
                ) : (
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={600}
                    height={400}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '400px',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                    unoptimized
                  />
                )}
              </ImageContainer>
              <TextContainer>
                <Title>{slide.title}</Title>
                <SubTitle>{slide.sub_title}</SubTitle>
                <Desc>
                  {slide.desc}
                  <Date>{slide.date}</Date>
                </Desc>
                <FlexBox $gap="16px" $margin={'16px 0 0 0'}>
                  {slide.demo_url && (
                    <button
                      className="effrct_button"
                      onClick={() => setDemoVideo(slide.demo_url!)}
                    >
                      Demo
                    </button>
                  )}
                  {slide.site_url && (
                    <button
                      className="effrct_button"
                      onClick={() => window.open(slide.site_url, '_blank')}
                    >
                      More View
                    </button>
                  )}
                  <button
                    className="effrct_button"
                    onClick={() => window.open(slide.git, '_blank')}
                  >
                    GitHub
                  </button>
                </FlexBox>
              </TextContainer>
            </SlideWrap>
          ))}
        </StyledSlider>
      </Wrapper>

      {demoVideo && (
        <ModalOverlay onClick={() => setDemoVideo(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setDemoVideo(null)}>✕</CloseButton>
            <video
              src={demoVideo}
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '80vh', borderRadius: '8px' }}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProjectSlider;

const Wrapper = styled.section`
  width: 100%;
  min-width: 320px;
  position: relative;
  cursor: pointer;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots {
    bottom: -50px;
  }

  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 8px;
    content: '';
    background-color: black;
    text-align: center;
    opacity: 0.25;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    background-color: ${theme.colors.blueColor};
    opacity: 0.7;
  }
`;

const SlideWrap = styled.div`
  display: flex !important;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  min-height: 400px;

  ${theme.devices.tablet} {
    flex-direction: column;
  }
  ${theme.devices.mobile} {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 400px;
    height: auto;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  button {
    font-family: Lato;
    font-size: 14pt;
    font-weight: 500;
    color: rgba(46, 81, 175, 0.489);
    padding: 12px;
    width: 140px;
    height: 40px;
    position: relative;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    color: rgba(27, 54, 127, 0.489);
  }
  .effrct_button:before,
  .effrct_button:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 40px;
    border: 1px solid rgba(84, 80, 80, 0.4);
    content: '';
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
    -moz-transition: -moz-transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
  }

  .effrct_button:after {
    border-color: #000;
    opacity: 0;
    -webkit-transform: translateY(-7px) translateX(6px);
    -moz-transform: translateY(-7px) translateX(6px);
    transform: translateY(-7px) translateX(6px);
  }

  .effrct_button:hover:before,
  .effrct_button:focus:before {
    opacity: 0;
    -webkit-transform: translateY(5px) translateX(-5px);
    -moz-transform: translateY(5px) translateX(-5px);
    transform: translateY(5px) translateX(-5px);
  }

  .effrct_button:hover:after,
  .effrct_button:focus:after {
    opacity: 1;
    -webkit-transform: translateY(0px) translateX(0px);
    -moz-transform: translateY(0px) translateX(0px);
    transform: translateY(0px) translateX(0px);
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-family: 'MontserratBold';
  font-weight: 800;
  margin-bottom: 20px;

  ${theme.devices.mobile} {
    ${theme.typography.h2}
  }
`;

const SubTitle = styled.div`
  ${theme.typography.h2}
  font-family: 'ChosunNm';
  font-weight: 700;
  margin-bottom: 12px;

  ${theme.devices.mobile} {
    ${theme.typography.h3}
  }
`;

const Desc = styled.div`
  ${theme.typography.h3}
  font-family: 'ChosunNm';
  font-weight: 500;
  flex: 1;

  ${theme.devices.mobile} {
    ${theme.typography.h5}
  }
`;

const Date = styled.div`
  ${theme.typography.h5}
  font-family: 'PretendardRegular';
  font-weight: 500;
  margin-top: 16px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 480px;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute !important;
  top: 10px !important;
  right: 12px !important;
  width: 32px !important;
  height: 32px !important;
  min-width: unset !important;
  padding: 0 !important;
  font-size: 16px !important;
  color: #fff !important;
  background: rgba(0, 0, 0, 0.5) !important;
  border-radius: 50% !important;
  z-index: 10;
  display: flex !important;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before,
  &:after {
    display: none !important;
  }
`;
