import { carHandler } from "./components/carHandler";
import { getAllCars } from "./components/getAllCars";
import { editCar } from "./components/editCar";
import { addCar } from "./components/addCar";
import { generateCars } from "./components/generateCars";
import { garageMarkup } from "./components/garageMarkup";
import { winnersMarkup } from "./components/winnersMarkup";
import { garagePageRender } from "./components/garagePageRender";
import { garagePageMarkup } from "./components/garagePageMarkup";
import { race } from "./components/race";
import { createWinner } from "./components/createWinner";
import { winner } from "./components/startCar";
import { addToTable } from "./components/addToTable";


export const BASE_URL = 'http://localhost:3000';
export const FINISH = window.innerWidth - 300;
export const STOP_CAR_PLACE = window.innerWidth - 250;
export const body = document.querySelector('body');

garagePageRender();

export const nameField = document.querySelector('#name');
export const colorField = document.querySelector('#color');
export const editNameField = document.getElementById('edit-name');
export const editColorField = document.getElementById('edit-color');
export const editCarBtn = document.getElementById('edit-car-btn');
export const addCarBtn = document.getElementById('add-car-btn');
export const carList = document.getElementById('get_cars_result');
const generateCarBtn = document.getElementById('generate-car-btn');
const winnersBtn = document.getElementById('winners-btn');
const winnersBtnFromWinners = document.getElementById('winners-btn-from-winners');
const garageBtn = document.getElementById('garage-btn');
const garageBtnFromWinners = document.getElementById('garage-btn-from-winners');
export const winnersPage = document.getElementById('winners-page');
export const garagePage = document.getElementById('garage-page');
const raceBtn = document.getElementById('race-btn');
export const winnerField = document.getElementById('winner');
export const winnerParent = document.querySelector('.cars');
export const winnersTable = document.querySelector('tbody');
// export const headTable = document.querySelector('.thead');

addCarBtn.addEventListener('click', addCar);
editCarBtn.addEventListener('click', editCar);
carList.addEventListener('click', carHandler);
generateCarBtn.addEventListener('click', generateCars);
winnersBtn.addEventListener('click', winnersMarkup);
winnersBtnFromWinners.addEventListener('click', winnersMarkup);
garageBtn.addEventListener('click', garagePageMarkup);
garageBtnFromWinners.addEventListener('click', garagePageMarkup);
raceBtn.addEventListener('click', race);



const interval = setInterval(check, 2000);
function check() {
    if(winner[0]) {
        createWinner(winner[0]);
        clearInterval(interval);
        addToTable(winner[0]);
        // winner.length = 0;
    }
}

console.log(winnersTable);



