// Redux
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import themeReducer from 'redux/theme/theme.reducer';
import dimensionsReducer from 'redux/dimensions/dimensions.reducer';

/* -------------------------------------------------------------------------- */

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  dimensions: dimensionsReducer,
});

/* -------------------------------------------------------------------------- */

export default persistReducer(persistConfig, rootReducer);
