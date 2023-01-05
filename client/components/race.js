import { carsPerPageArr } from "./paginationGarage";
import { startCar } from "./startCar";
import { winner } from "./startCar";
import { raceBtn } from "../frontend";
import { resetBtn } from "../frontend";
import { carsTime } from "./startCar";

export const race = () => {
    winner.length = 0;
    carsTime.length = 0;
    // console.log('winner arr ' + winner);
    raceBtn.setAttribute('disabled', '');
    resetBtn.setAttribute('disabled', '');
    carsPerPageArr.forEach((el) => {
        startCar(el.id);
    });
}




