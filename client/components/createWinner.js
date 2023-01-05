import { BASE_URL } from "../frontend";
import { carsTime } from "./startCar";


export const createWinner = async (winnerId) => {

    let winsNumber = 1;
    const currentWinner = {
        id: winnerId,
        wins: winsNumber,
        time: carsTime[0]
    }

    try {
        const res = await fetch(`${BASE_URL}/winners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentWinner)
        });

        const addedWinner = await res.json();
        // console.log(addedWinner);
    } catch (error) {
        console.log(error);
    }


    try {
        const res = await fetch(`${BASE_URL}/winners`);
        const getWinners = await res.json();
        console.log(getWinners);
    } catch (error) {
        console.log(error);
    }
}


