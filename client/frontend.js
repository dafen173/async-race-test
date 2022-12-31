import { carHandler } from "./components/carHandler";
import { getAllCars } from "./components/getAllCars";
import { editCar } from "./components/editCar";
import { addCar } from "./components/addCar";

export const BASE_URL = 'http://localhost:3000';
export const FINISH = window.innerWidth - 300;
export const STOP_CAR_PLACE = window.innerWidth - 250;
const body = document.querySelector('body');

body.innerHTML = `
    <div class="mt-4 ml-4">
        <div class="col-2">
            <div class="col-6"><h1 class="h1">ASYNC RACE</h1></div>
            <br>
            <br>
            <div class="mb-1">
                <label for="name" class="form-label">ADD CAR</label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label"></label>
                <input type="color" id="color" class="form-control">
            </div>
            <button type="submit" id="add-car-btn" class="btn btn-primary">ADD CAR</button>
            <br>
            <br>
            <br>
            <br>
            <div class="mb-1">
                <label for="edit-name" class="form-label">EDIT CAR</label>
                <input type="text" id="edit-name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="edit-color" class="form-label"></label>
                <input type="color" id="edit-color" class="form-control">
            </div>
            <button type="submit" id="edit-car-btn" class="btn btn-primary">EDIT CAR</button>
            <br>
            <br>
            <br>
            <br>
            <button type="submit" id="generate-car-btn" class="btn btn-primary">GENERATE CARS</button>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
    <div class="">
        <div class="col mt-5">
            <div class="row">
                <div class="row">
                    <div class="col-4">
                        <div id="get_cars_result"></div>
                    </div>
                    <div class="pagination"></div>
                </div>
            </div>
        </div>
    </div>
`
window.addEventListener('DOMContentLoaded', getAllCars);

export const nameField = document.querySelector('#name');
export const colorField = document.querySelector('#color');
export const editNameField = document.getElementById('edit-name');
export const editColorField = document.getElementById('edit-color');
export const editCarBtn = document.getElementById('edit-car-btn');
export const addCarBtn = document.getElementById('add-car-btn');
export const carList = document.getElementById('get_cars_result');


addCarBtn.addEventListener('click', addCar);
editCarBtn.addEventListener('click', editCar);
carList.addEventListener('click', carHandler);



///////GENERATE CARS////////////////////////////////////////////////
const carBrands = [
    'Saab',
    'Skoda',
    'Audi',
    'Hyundai',
    'Ford',
    'Volkswagen',
    'Ferrari',
    'BMW',
    'Mazda',
    'Toyota'
  ];
  const carModels = [
    "Carrera",
    "Targa",
    "Turbo",
    "Boxster",
    "Cayenne",
    "Cayman",
    "Macan",
    "Panamera",
    "Integra",
    "Legend"
  ];

const randomCarName = () => {
    const carBrand = carBrands[Math.floor(Math.random() * carBrands.length)];
    const carModel = carModels[Math.floor(Math.random() * carModels.length)];
    // console.log(carBrand, carModel);
    return `${carBrand} ${carModel}`;
};
// randomCarName();

const hexSymbols = '0123456789ABCDEF';
const randomCarColor = () => {
    let carColor = '#';

    for (let i = 0; i < 6; i += 1) {
      carColor += hexSymbols[Math.floor(Math.random() * 16)];
    }
    // console.log(carColor);
    return carColor;
}
// randomCarColor();

const generateCars = (carCount = 100) =>
  new Array(carCount)
    .fill('yoooo')
    .map(() => ({ name: randomCarName(), color: randomCarColor()}));

let generatedCarArr = generateCars();
console.log(generatedCarArr);

const generateCarBtn = document.getElementById('generate-car-btn');
generateCarBtn.addEventListener('click', async () => {


    await Promise.all(generatedCarArr.map(async item => {
        const resGenerateCars = await fetch(`${BASE_URL}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });


    }));

    // const paginationEl = document.querySelector('.pagination');
    // paginationEl.innerHTML = '';
    getAllCars();

    // const addedGenerateCar = await resGenerateCars.json();
    // console.log(addedGenerateCar);
    // carsRender(addedGenerateCar);
})





