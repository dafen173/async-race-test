import { carsPerPageArr } from "./paginationGarage";
import { startCar } from "./startCar";
import { winner } from "./startCar";

export const race = () => {
    winner.length = 0;
    console.log('winner arr ' + winner);

    carsPerPageArr.forEach((el) => {
        startCar(el.id);
    });
}




