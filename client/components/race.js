/* eslint-disable import/no-cycle */
import { carsPerPageArr } from './paginationGarage';
import { startCar, winner, carsTime } from './startCar';
import { raceBtn, resetBtn } from '../frontend';

export const race = () => {
  winner.length = 0;
  carsTime.length = 0;
  raceBtn.setAttribute('disabled', '');
  resetBtn.setAttribute('disabled', '');
  carsPerPageArr.forEach((el) => {
    startCar(el.id);
  });
};

export default race;
