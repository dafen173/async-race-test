import { deleteCar } from "./deleteCar";
import { selectCar } from "./selectCar";
import { startCar } from "./startCar";
import { stopCar } from "./stopCar";


export const carHandler = (el) => {
    if (el.target.classList.contains('btn-delete')) {
        const carId = el.target.parentElement.id.slice(3);
        deleteCar(carId);
    }

    if (el.target.classList.contains('btn-edit')) {
        const carId = el.target.parentElement.id.slice(3);
        selectCar(carId);
    }

    if (el.target.classList.contains('start-car-btn')) {
        const carId = el.target.parentElement.parentElement.id.slice(3);
        startCar(carId);
    }

    if (el.target.classList.contains('stop-car-btn')) {
        // console.log(el.target.parentElement.parentElement.id);
        // console.log(el.target.parentElement.parentElement.id.slice(3));
        const carId = el.target.parentElement.parentElement.id.slice(3);
        stopCar(carId);
    }
}