import { BASE_URL } from "../frontend";
import { displayList } from "./paginationGarage";
import { displayPagination } from "./paginationGarage";
import { carList } from "../frontend";
import { garageMarkup } from "./garageMarkup";
import { winnersTable } from "../frontend";
import { winnersRender } from "./winnersRender";


export let currentPage = 1;
let rows = 7;

export async function getAllCars() {

    const res = await fetch(`${BASE_URL}/garage`);
    const cars = await res.json();
    console.log('getAllCars');

    displayList(cars, rows, currentPage);
    displayPagination(cars, rows);


///////////////////////////////
    // winnersRender();
///////////////////////////

    // const resWinner = await fetch(`${BASE_URL}/winners`);
    // const winnerCarResults = await resWinner.json();
    // console.log(winnerCarResults);

    // winnerCarResults.forEach( async (element) => {
    //     const res = await fetch(`${BASE_URL}/garage/${element.id}`);
    //     const winners = await res.json();

    //     let row = winnersTable.insertRow(0);
    //     let cell1 = row.insertCell(0);
    //     let cell2 = row.insertCell(1);
    //     let cell3 = row.insertCell(2);
    //     let cell4 = row.insertCell(3);
    //     let cell5 = row.insertCell(4);
    //     cell1.innerHTML = element.id;
    //     cell2.innerHTML = winners.color;
    //     cell3.innerHTML = winners.name;
    //     cell4.innerHTML = element.wins;
    //     cell5.innerHTML = element.time;
    // });
}




