/* eslint-disable import/no-cycle */
import { winnersPage, garagePage } from '../frontend';
import { winnersRender } from './winnersRender';
import { clearTable } from './winnersClearTable';

export const winnersMarkup = () => {
  clearTable();
  winnersRender();

  garagePage.style.display = 'none';
  winnersPage.style.display = 'block';
};

export default winnersMarkup;
