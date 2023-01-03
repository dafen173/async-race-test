// import { winner } from "./startCar";
import { BASE_URL } from "../frontend";

export const createWinner = async (winnerId) => {
    console.log('winner is yoooooo');

    const currentWinner = {
        id: winnerId,
        wins: 1,
        time: 23
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
        console.log(addedWinner);
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


    // try {
    //     // const res = await fetch(`${BASE_URL}/winners/${winnerId}`);
    //     const res = await fetch(`${BASE_URL}/winners/1`);
    //     const resWinner = await res.json();
    //     console.log(resWinner);
    // } catch (error) {
    //     console.log(error);
    // }

    
    
    // if(winner[0]) {
    //     console.log('winner is yoooooo');
    //     try {
    //         const res = await fetch(`${BASE_URL}/winners/${winner[0]}`);
    //         const resWinner = await res.json();
    //         console.log(resWinner);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}


