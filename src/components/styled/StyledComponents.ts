"use client";

import styled, { css } from "styled-components";
import theme from "@styles/theme";
// import { flex } from "@styles/variables";
// import { darken } from "polished";

type FontType = {
  $fontSize?: number;
  $lineHeight?: number;
  $fontColor?: string;
  $margin?: string;
};

type FlexBoxType = {
  $flex?: number;
  $flexDirection?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $gap?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $maxWidth?: number;
  $flexWrap?: string;
  $bgColor?: string;
  $boxShadow?: string;
};

type WrapperType = {
  $width?: number;
  $height?: number;
  $maxWidth?: number;
  $margin?: string;
  $padding?: string;
};

export const Box = styled.div<{
  $border?: string;
  $bgColor?: string;
  $color?: string;
  $padding?: string;
  $height?: number;
}>`
  width: fit-content;
  font-family: PretendardRegular;
  height: ${({ $height }) => ($height ? `${$height}px` : "36px")};
  padding: ${({ $padding }) => ($padding ? $padding : "7px 12px 7px 12px")};
  gap: 10px;
  background-color: ${({ $bgColor }) =>
    $bgColor ? $bgColor : theme.colors.ultraLightGrayBgColor};
  border: ${({ $border }) => $border};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

// export const TabMenu = styled.ul<{
//   $active?: boolean;
//   $desktop?: boolean;
//   $tabCount?: number;
// }>`
//   display: flex;
//   overflow-x: auto;
//   border-bottom: ${({ theme }) =>
//     `1px solid ${theme.colors.lightGrayBorderColor}`};
//   scrollbar-width: none;
//   -ms-overflow-style: none;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   ${({ $active }) =>
//     $active &&
//     css`
//       display: flex;
//     `}

//   ${({ $desktop }) =>
//     $desktop &&
//     css`
//       display: none;

//       ${theme.devices.desktop} {
//         display: flex;
//       }
//     `}

//   ${({ $tabCount }) =>
//     $tabCount &&
//     $tabCount < 3 &&
//     css`
//       justify-content: space-around;
//     `}
// `;

export const FlexBox = styled.div<FlexBoxType>`
  display: flex;
  flex: ${({ $flex }) => ($flex ? $flex : 1)};
  flex-direction: ${({ $flexDirection }) => ($flexDirection ? $flexDirection : 'row')};
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'flex-start')};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : 'center')};
  gap: ${({ $gap }) => ($gap ? $gap : 0)};
  margin: ${({ $margin }) => ($margin ? $margin : 0)};
  padding: ${({ $padding }) => ($padding ? $padding : 0)};
  border: ${({ $border }) => ($border ? '1px solid red' : 'none')};
  flex-wrap: ${({ $flexWrap }) => ($flexWrap ? $flexWrap : 'nowrap')};
  position: relative;
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : '100%')};
  box-shadow: ${({ $boxShadow }) =>
    $boxShadow ? $boxShadow : 'none'};
  background-color: ${({ $bgColor }) =>
    $bgColor ? $bgColor : 'none'};
`;

export const Wrapper = styled.div<WrapperType>`
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : '1440px')};
  height: ${({ $height }) => ($height ? `${$height}px` : '100%')};
  margin: ${({ $margin }) => ($margin ? $margin : '0 auto')};
  padding: ${({ $padding }) => ($padding ? $padding : '0 auto')};
`;

export const Wrap = styled.div<{ $padding?: string, $margin?: string }>`
  width: 100%;
  max-width: 720px;
  margin: ${({ $margin }) => ($margin ? $margin : 0)};
  padding: ${({ $padding }) => ($padding ? $padding : 0)};

  ${theme.devices.mobile} {
    /* margin: ${({ $margin }) => ($margin ? $margin : "0 16px")}; */
    padding: ${({ $padding }) => ($padding ? $padding : "0 16px")};
  }
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`;

export const InnerWrap = styled.div<{
  $margin?: string;
  $padding?: string;
  $mobileMargin?: string;
}>`
  margin: ${({ $margin }) => $margin};

  > div {
    border-bottom: 1px solid ${theme.colors.ultraLightGrayBgColor};
  }

  & img {
    border-bottom: none;
  }

  > div:last-child {
    border-bottom: none;
  }

  ${({ theme }) => theme.devices.mobile} {
    padding: ${({ $padding }) => ($padding ? $padding : "0 16px")};
    margin: ${({ $mobileMargin }) => $mobileMargin};
  }
`;

// export const Wrapper = styled.div`
//   width: 100%;
//   min-width: 320px;
//   min-height: calc(var(--vh, 1vh) * 100);
//   margin: 0 auto;
//   position: relative;

//   //border: 5px solid red;

//   ${theme.devices.mobile} {
//     //width: 375px;
//   }

//   ${theme.devices.tablet} {
//     max-width: 720px;
//   }

//   ${theme.devices.desktop} {
//     position: static;
//     max-width: 1080px;
//   }
// `;

