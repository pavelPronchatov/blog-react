export  const formatedDate = (date: Date): string => {
  let d: number | string = date.getDate();
  let m: number | string = date.getMonth() + 1;

  if (d < 10) d = `0${d}`;
  if (m < 10) m = `0${m}`;

  return `${d}.${m}.${date.getFullYear()}`
}

export const replaceEmptyImg = (node: HTMLElement): void => {
  node.setAttribute('src', '../../assets/empty-img.png');
}