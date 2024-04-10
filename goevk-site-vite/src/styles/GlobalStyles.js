import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --clr-bg: #001524;
    --clr-fg: #ffecd1;
    --clr-accent: #ff7d00;
    --clr-btn-1: #007745; /* #fa515d */
    --clr-btn-2: var(--clr-accent);
    --border-radius: 1px;
  }
`;

export const GlobalStylesLight = createGlobalStyle`
  :root {
    --clr-bg: #e9ecf5;
    --clr-fg: #202c59;
    --clr-accent: #9b0095;
    --clr-btn-1: #007745; /* #fa515d */
    --clr-btn-2: var(--clr-accent);
    --border-radius: 4px;
  }
`;
