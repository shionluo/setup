/**
 * @param {String} theme ( light | dark )
 */
export const toggleColor = ({ color }) => {
  return color === 'light' ? 'dark' : 'light';
};
