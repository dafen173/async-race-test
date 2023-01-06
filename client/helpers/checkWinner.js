import { winner } from "../components/startCar";
import { createWinner } from "../components/createWinner";
import { interval } from "../frontend";
import { offResetBtnAndAlert } from "../components/offResetBtnAndAlert";
import { BASE_URL } from "../frontend";
import { editWinner } from "../components/editWinner";
import { carsTime } from "../components/startCar";

export async function checkWinner() {
    if(winner[0]) {
        console.log('winner id is ' + winner[0] + 'with time ' + carsTime[0]);
        // console.log(carsTime);

        const resWinner = await fetch(`${BASE_URL}/winners`);
        const winnerCarResults = await resWinner.json();

        let search = winnerCarResults.find( x => x.id === winner[0]);

        if(search === undefined) {
            console.log('winner id is not here yet!');
            createWinner(winner[0]);
            clearInterval(interval);
            offResetBtnAndAlert(winner[0]);
        } else {
            console.log('go to editWinter');
            editWinner(winner[0]);
            clearInterval(interval);
            offResetBtnAndAlert(winner[0]);
        }
    }
}