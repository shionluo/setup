// Core
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

// Packages
import { BrowserRouter as Router } from 'react-router-dom';

// Config
import Theme from 'config/theme';

// Containers
import App from 'containers/app/app.container';

// Styled
import { GlobalStyles } from 'utils/styles/global-styles';

import 'utils/styles/main.css';

/* -------------------------------------------------------------------------- */

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Theme>
        <GlobalStyles />

        <Router>
          <App />
        </Router>
      </Theme>
    </PersistGate>
  </Provider>
);

/* -------------------------------------------------------------------------- */

export default Root;
