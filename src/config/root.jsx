// Import - Core
import React from 'react';

// Import - Redux
import { Provider } from 'react-redux';
import store from 'redux/store';

// Import - Theme
import Theme from 'config/theme';

// Import - Router
import { BrowserRouter as Router } from 'react-router-dom';

// Import - Containers
import App from 'containers/app/app.component';

// Import - Styles
import GlobalStyles from 'utils/styles/global-styles';

// ----------------------------------------------------------------------------------------- //

const Root = () => (
  <Provider store={store}>
    <Theme>
      <GlobalStyles />

      <Router>
        <App />
      </Router>
    </Theme>
  </Provider>
);

// Export
export default Root;
