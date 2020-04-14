// Core
import React from 'react';

// Packages
import { ThemeProvider } from 'styled-components';

/* -------------------------------------------------------------------------- */

const theme = {};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

/* -------------------------------------------------------------------------- */

export default Theme;
