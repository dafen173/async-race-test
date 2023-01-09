/* eslint-disable import/no-cycle */
import { carsTime } from './startCar';
import { BASE_URL } from '../frontend';

export const editWinner = async (winnerId) => {
  const resWinner = await fetch(`${BASE_URL}/winners/${winnerId}`);
  const winnerCarResults = await resWinner.json();
  let editWinnerCar = {};

  if (carsTime[0] < winnerCarResults.time) {
    editWinnerCar = {
      id: winnerId,
      wins: winnerCarResults.wins + 1,
      time: carsTime[0],
    };
  } else {
    editWinnerCar = {
      id: winnerId,
      wins: winnerCarResults.wins + 1,
      time: winnerCarResults.time,
    };
  }

  await fetch(`${BASE_URL}/winners/${winnerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editWinnerCar),
  });
};

export default editWinner;
