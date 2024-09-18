import { ChangeEvent } from "react";

export type onChangeEventType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLTextAreaElement>;
export type SVGProps = {
  onClick?: () => void;
  color?: string;
};

declare global {
  interface Window {
    google: typeof google;
    googleTranslateElementInit?: () => void;
  }
}
