// Import - Styled Components
import { createGlobalStyle } from 'styled-components';

// Import - Normalize CSS
import { normalize } from 'styled-normalize';

// ----------------------------------------------------------------------------------------- //

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: transparent;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  
    &:hover {
      text-decoration: none;
    }
  }
`;

// Export
export default GlobalStyle;
