import { BASE_URL } from "../frontend";
import { winnersTable } from "../frontend";
import { resetBtn } from "../frontend";
import { carsTime } from "./startCar";

// let number = 0;

export const addToTable = async (winnerId) => {
    resetBtn.removeAttribute('disabled');

    const res = await fetch(`${BASE_URL}/garage/${winnerId}`);
    const winnerCar = await res.json();
    // console.log(winnerCar);
    alert(`The winner is the ${winnerCar.name} with time ${carsTime[0]}!`);



    const resWinner = await fetch(`${BASE_URL}/winners/${winnerId}`);
    const winnerCarResults = await resWinner.json();
    console.log(winnerCarResults);

    let row = winnersTable.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = winnerCarResults.id;
    cell2.innerHTML = winnerCar.color;
    cell3.innerHTML = winnerCar.name;
    cell4.innerHTML = winnerCarResults.wins;
    cell5.innerHTML = winnerCarResults.time;
}


