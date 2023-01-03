import { carList } from "../frontend";
import { currentPage} from "./getAllCars";
import { carsRender } from "./carsRender";
import { BASE_URL } from "../frontend";

export let carsPerPageArr = [];

export function displayList(arrData, rowPerPage, page) {

        // let carsPerPageArr = [];
        console.log('yooooooo display');
        carList.innerHTML = '';

        // console.log(carList);
        // if (carList) {
        //     carList.innerHTML = 'fffffff';
        // }
        // console.log(carList);

        page--;
        let start = rowPerPage * page;
        let end = start + rowPerPage;
        let paginatedData = arrData.slice(start, end);

        carsPerPageArr = [];
        paginatedData.forEach(element => {
            carsPerPageArr.push(element);

            carsRender(element);
        });

        console.log(carsPerPageArr);
}

export function displayPagination(arrData, rowPerPage){
    const paginationEl = document.querySelector('.pagination');
    paginationEl.innerHTML = '';

    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i+1, rowPerPage);
        ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
}

function displayPaginationBtn(page, rowPerPage) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;

    if (currentPage == page) liEl.classList.add('pagination__item--active');

    liEl.addEventListener('click', async () => {
        console.log(page);
        console.log(currentPage);
        // currentPage = page;
        // displayList(cars, rows, currentPage);

        const res = await fetch(`${BASE_URL}/garage`);
        const carsPerPage = await res.json();
        console.log(carsPerPage);

        displayList(carsPerPage, rowPerPage, page);
        // displayList(arrData, rowPerPage, page);

        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.classList.remove('pagination__item--active');
        liEl.classList.add('pagination__item--active');
    })
    return liEl;
}