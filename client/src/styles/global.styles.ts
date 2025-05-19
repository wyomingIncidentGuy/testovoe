/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "@font-face": {
    fontFamily: "Inter",
    src: "url('/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype')",
    fontDisplay: "swap",
  },
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
    minWidth: "1920px",
  },
  "body": {
    fontFamily: "Inter",
  }
};
