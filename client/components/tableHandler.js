import { sortTable } from './sortTable';

export const tableHandler = (el) => {
  const targetEl = el.target;
  const thIndex = el.target.cellIndex;
  if (thIndex === 3 || thIndex === 4) {
    el.target.classList.toggle('ascending');
    sortTable(targetEl);
  }
};

export default tableHandler;
