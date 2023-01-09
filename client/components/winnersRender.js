/* eslint-disable import/no-cycle */
import { BASE_URL, winnersTable } from '../frontend';
import { insertCarImage } from '../helpers/insertCarImage';

export async function winnersRender() {
  const resWinner = await fetch(`${BASE_URL}/winners`);
  const winnerCarResults = await resWinner.json();

  winnerCarResults.forEach(async (element) => {
    const res = await fetch(`${BASE_URL}/garage/${element.id}`);
    const winners = await res.json();

    const row = winnersTable.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    cell1.innerHTML = element.id;
    cell2.innerHTML = insertCarImage(winners.color);
    cell3.innerHTML = winners.name;
    cell4.innerHTML = element.wins;
    cell5.innerHTML = element.time;
  });
}

export default winnersRender;
