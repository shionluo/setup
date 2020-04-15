/**
 * @param {String} color ( light | dark )
 */
export const toggleColor = ({ color }) => {
  return color === 'light' ? 'dark' : 'light';
};
