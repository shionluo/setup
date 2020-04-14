// Types
import { SET_DIMENSIONS } from './dimensions.types';

/* -------------------------------------------------------------------------- */

const INITIAL_STATE = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const dimensionsReducer = (state = INITIAL_STATE, { type, dimensions = {} }) => {
  const { width, height } = dimensions;

  const reducer = {
    [SET_DIMENSIONS]: {
      ...state,
      width,
      height,
    },
  };

  return reducer[type] || state;
};

/* -------------------------------------------------------------------------- */

export default dimensionsReducer;
