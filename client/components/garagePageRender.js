/* eslint-disable import/no-cycle */
import { garageMarkup } from './garageMarkup';
import { getAllCars } from './getAllCars';

export const garagePageRender = () => {
  garageMarkup();
  window.addEventListener('DOMContentLoaded', getAllCars);
};

export default garagePageRender;
