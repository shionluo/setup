import { TOGGLE_THEME } from './theme.types';

import { toggleColor } from './theme.utils';

/* -------------------------------------------------------------------------- */

const INITIAL_STATE = {
  color: 'light',
};

const themeReducer = (state = INITIAL_STATE, { type }) => {
  const reducer = {
    [TOGGLE_THEME]: {
      ...state,
      color: toggleColor(state),
    },
  };

  return reducer[type] || state;
};

/* -------------------------------------------------------------------------- */

export default themeReducer;
