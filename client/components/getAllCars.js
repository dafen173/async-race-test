/* eslint-disable import/no-cycle */
import { BASE_URL } from '../frontend';
import { displayList, displayPagination } from './paginationGarage';

export const currentPage = 1;
const rows = 7;

export async function getAllCars() {
  const res = await fetch(`${BASE_URL}/garage`);
  const cars = await res.json();

  displayList(cars, rows, currentPage);
  displayPagination(cars, rows);
}
