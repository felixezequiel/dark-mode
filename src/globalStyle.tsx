import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ color: string }>`
* {
    line-height: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${ props => props.color };
    font-family: 'Arial';
    font-weight: 100;
    font-size: 100%;
  }
`