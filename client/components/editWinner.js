import { carsTime } from "./startCar";
import { BASE_URL } from "../frontend";


export const editWinner = async (winnerId) => {
    // console.log(carsTime);

    const resWinner = await fetch(`${BASE_URL}/winners/${winnerId}`);
    const winnerCarResults = await resWinner.json();
    console.log(winnerCarResults);

    const editWinnerCar = {
        // name: editNameField.value,
        // color: editColorField.value
        id: winnerId,
        wins: winnerCarResults.wins + 1,
        time: carsTime[0]
    }

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