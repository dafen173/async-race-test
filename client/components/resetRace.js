import { raceBtn } from "../frontend";
import { carsPerPageArr } from "./paginationGarage";
import { stopCar } from "./stopCar";
import { winner } from "./startCar";
import { interval } from "../frontend";
import { checkWinner } from "../helpers/checkWinner";
import { createWinner } from "./createWinner";
import { addToTable } from "./addToTable";
import { BASE_URL } from "../frontend";
import { editWinner } from "./editWinner";



export const resetRace = () => {
    raceBtn.removeAttribute('disabled');
    winner.length = 0;

    let intervalAfterReset = setInterval(checkWinnerAfterReset, 2000);
    async function checkWinnerAfterReset() {
        if(winner[0]) {
            console.log('resetRace works...')
            // createWinner(winner[0]);
            // clearInterval(intervalAfterReset);
            // addToTable(winner[0]);
            const resWinner = await fetch(`${BASE_URL}/winners`);
            const winnerCarResults = await resWinner.json();

            let search = winnerCarResults.find( x => x.id === winner[0]);

            if(search === undefined) {
                console.log('resetRace works... winner id is not here yet!');
                createWinner(winner[0]);
                clearInterval(intervalAfterReset);
                addToTable(winner[0]);
            } else {
                console.log('resetRace works... go to editWinter');
                editWinner(winner[0]);
                clearInterval(intervalAfterReset);
                addToTable(winner[0]);
            }
        }
    }

    carsPerPageArr.forEach((el) => {
        stopCar(el.id);
        let carImagePerPage = document.getElementById(`car-icon-${el.id}`);
        carImagePerPage.style.left = 0 + 'px';
    });
}


