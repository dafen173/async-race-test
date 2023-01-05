import { BASE_URL } from "../frontend";
import { winnersTable } from "../frontend";


export async function winnersRender () {
    const resWinner = await fetch(`${BASE_URL}/winners`);
    const winnerCarResults = await resWinner.json();
    console.log('winnersRender works!!!');

    winnerCarResults.forEach( async (element) => {
        const res = await fetch(`${BASE_URL}/garage/${element.id}`);
        const winners = await res.json();

        let row = winnersTable.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = element.id;
        cell2.innerHTML = winners.color;
        cell3.innerHTML = winners.name;
        cell4.innerHTML = element.wins;
        cell5.innerHTML = element.time;
    });
}


