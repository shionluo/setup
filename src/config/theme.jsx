// Import - Core
import React from 'react';

// Import - Theme Provider
import { ThemeProvider } from 'styled-components';

// ----------------------------------------------------------------------------------------- //

const theme = {
  colors: {},
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

// Export
export default Theme;
