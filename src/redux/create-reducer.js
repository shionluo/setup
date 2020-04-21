export const createReducer = (initialState, reducer) => (state = initialState, { type, payload }) => {
  const _type = typeof reducer[type];

  if ((Object.prototype.hasOwnProperty.call(reducer, type) && _type === 'function') || _type === 'object') {
    const updated = _type === 'function' ? reducer[type](state, payload) : reducer[type];

    return state instanceof Array ? [...state, ...updated] : { ...state, ...updated };
  }

  return state;
};
