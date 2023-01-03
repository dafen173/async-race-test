import { garageMarkup } from "./garageMarkup";
import { displayList } from "./paginationGarage";
import { BASE_URL } from "../frontend";
import { getAllCars } from "./getAllCars";
import { carList } from "../frontend";
// import { carHandler } from "./components/carHandler";
// import { getAllCars } from "./components/getAllCars";
// import { editCar } from "./components/editCar";
// import { addCar } from "./components/addCar";
// import { generateCars } from "./components/generateCars";
// import { garageMarkup } from "./components/garageMarkup";
// import { winnersMarkup } from "./components/winnersMarkup";

// export const BASE_URL = 'http://localhost:3000';
// export const FINISH = window.innerWidth - 300;
// export const STOP_CAR_PLACE = window.innerWidth - 250;
// export const body = document.querySelector('body');
// // garageMarkup();
// // window.addEventListener('DOMContentLoaded', getAllCars);
// export const nameField = document.querySelector('#name');
// export const colorField = document.querySelector('#color');
// export const editNameField = document.getElementById('edit-name');
// export const editColorField = document.getElementById('edit-color');
// export const editCarBtn = document.getElementById('edit-car-btn');
// export const addCarBtn = document.getElementById('add-car-btn');
// export const carList = document.getElementById('get_cars_result');
// const generateCarBtn = document.getElementById('generate-car-btn');
// const winnersBtn = document.getElementById('winners-btn');
// // const garageBtn = document.getElementById('garage-btn');



export const garagePageRender = () => {
    garageMarkup();
    
    // getAllCars();

    // if(carList) {
    //     carList.innerHTML = 'bbbbbbbbb';
    //     console.log(carList);
    // }

    
    window.addEventListener('DOMContentLoaded', getAllCars);
  


    // const res = await fetch(`${BASE_URL}/garage`);
    //     const carsPerPage = await res.json();
    //     console.log(carsPerPage);

    // displayList(carsPerPage, 7, 1);

}