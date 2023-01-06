import { carsTime } from "./startCar";
import { BASE_URL } from "../frontend";


export const editWinner = async (winnerId) => {

    const resWinner = await fetch(`${BASE_URL}/winners/${winnerId}`);
    const winnerCarResults = await resWinner.json();
    // console.log(winnerCarResults);
    let editWinnerCar = {};

    if(carsTime[0] < winnerCarResults.time) {
        editWinnerCar = {
            id: winnerId,
            wins: winnerCarResults.wins + 1,
            time: carsTime[0]
        }
    } else {
        editWinnerCar = {
            id: winnerId,
            wins: winnerCarResults.wins + 1,
            time: winnerCarResults.time
        }
    }

    console.log('editWinner obj!!!');
    console.log(editWinnerCar);

    const res = await fetch(`${BASE_URL}/winners/${winnerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editWinnerCar)
    });
    const resEditWinner = await res.json();
    console.log(resEditWinner);

}