/* eslint-disable import/no-cycle */
import { carList, BASE_URL } from '../frontend';
import { currentPage } from './getAllCars';
import { carsRender } from './carsRender';

// eslint-disable-next-line import/no-mutable-exports
export let carsPerPageArr = [];

export function displayList(arrData, rowPerPage, page) {
  carList.innerHTML = '';

  // page--;
  const pageMinusOne = page - 1;

  // const start = rowPerPage * page;
  const start = rowPerPage * pageMinusOne;
  const end = start + rowPerPage;
  const paginatedData = arrData.slice(start, end);

  carsPerPageArr = [];
  paginatedData.forEach((element) => {
    carsPerPageArr.push(element);

    carsRender(element);
  });
}

function displayPaginationBtn(page, rowPerPage) {
  const liEl = document.createElement('li');
  liEl.classList.add('pagination__item');
  liEl.innerText = page;

  if (currentPage === page) liEl.classList.add('pagination__item--active');

  liEl.addEventListener('click', async () => {
    const res = await fetch(`${BASE_URL}/garage`);
    const carsPerPage = await res.json();

    displayList(carsPerPage, rowPerPage, page);

    const currentItemLi = document.querySelector('li.pagination__item--active');
    currentItemLi.classList.remove('pagination__item--active');
    liEl.classList.add('pagination__item--active');
  });
  return liEl;
}

export function displayPagination(arrData, rowPerPage) {
  const paginationEl = document.querySelector('.pagination');
  paginationEl.innerHTML = '';

  const pagesCount = Math.ceil(arrData.length / rowPerPage);
  const ulEl = document.createElement('ul');
  ulEl.classList.add('pagination__list');

  for (let i = 0; i < pagesCount; i++) {
    const liEl = displayPaginationBtn(i + 1, rowPerPage);
    ulEl.appendChild(liEl);
  }
  paginationEl.appendChild(ulEl);
}
