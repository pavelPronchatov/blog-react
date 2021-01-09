export  const formatedDate = date => {
  let d = date.getDate();
  let m = date.getMonth() + 1;

  if (d < 10) d = `0${d}`;
  if (m < 10) m = `0${m}`;

  return `${d}.${m}.${date.getFullYear()}`
}

export const replaceEmptyImg = (node) => {
  node.setAttribute('src', require('./assets/empty-img.png').default);
}