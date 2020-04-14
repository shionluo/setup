// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

// Reducer
import rootReducer from 'redux/root-reducer';

/* -------------------------------------------------------------------------- */

// List of middlewares
const middlewares = [];

// Add Redux DevTools Extension
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
