export const regexpUrl = (url) => {
  return url
    .replace('https://www.', '')
    .replace('http://www.', '')
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0];
};
