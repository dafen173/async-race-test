/* eslint-disable import/no-cycle */
import { garagePage, winnersPage } from '../frontend';

export const garagePageMarkup = () => {
  winnersPage.style.display = 'none';
  garagePage.style.display = 'block';
};

export default garagePageMarkup;
