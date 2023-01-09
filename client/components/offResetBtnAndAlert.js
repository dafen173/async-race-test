/* eslint-disable import/no-cycle */
import { BASE_URL, resetBtn } from '../frontend';
import { carsTime } from './startCar';

export const offResetBtnAndAlert = async (winnerId) => {
  resetBtn.removeAttribute('disabled');

  const res = await fetch(`${BASE_URL}/garage/${winnerId}`);
  const winnerCar = await res.json();
  // eslint-disable-next-line no-alert
  alert(`The winner is the ${winnerCar.name} with time ${carsTime[0]}!`);
};

export default offResetBtnAndAlert;
