import { carList } from "../frontend";
import { FINISH } from "../frontend";
import { currentPage } from "./getAllCars";
import { carsRender } from "./carsRender";



function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add('pagination__item--active');

    liEl.addEventListener('click', () => {
        currentPage = page;
        displayList(cars, rows, currentPage);

        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.classList.remove('pagination__item--active');
        liEl.classList.add('pagination__item--active');
    })
    return liEl;
}

export function displayList(arrData, rowPerPage, page) {
        carList.innerHTML = '';
        page--;
        let start = rowPerPage * page;
        let end = start + rowPerPage;
        let paginatedData = arrData.slice(start, end);
        paginatedData.forEach(element => {
            carsRender(element);
        });
}

export function displayPagination(arrData, rowPerPage){
    const paginationEl = document.querySelector('.pagination');
    paginationEl.innerHTML = '';

    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i =0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i+1);
        ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
}




