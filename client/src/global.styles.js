import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  
  a {
      text-decoration: none;
  }
  
  body {
    position: relative;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ffffff;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  
  * {
    scrollbar-width: thin;
    scrollbar-color: #574A97 #E5F7FF;
    user-select: none;
  }
  
  *::-webkit-scrollbar {
    width: 12px;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #574A97;
    border-radius: 20px;
    border: 3px solid #EBE5F6;
  }
`;
