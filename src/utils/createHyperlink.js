export const createHyperlink = (key, value) => {
  let prefix = '';
  if (key === 'email') prefix = 'mailto:';
  else if (key === 'phone') prefix = 'tel:';
  else if (key === 'website') prefix = 'https://';

  return prefix.concat(value);
};
