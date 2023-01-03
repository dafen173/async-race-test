import { BASE_URL } from "../frontend";
import { winnersTable } from "../frontend";

let number = 0;

export const addToTable = async (winnerId) => {
    const res = await fetch(`${BASE_URL}/garage/${winnerId}`);
    const winnerCar = await res.json();
    console.log(winnerCar);

    number += 1;
    let row = winnersTable.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = number;
    cell2.innerHTML = winnerCar.color;
    cell3.innerHTML = winnerCar.name;
}


