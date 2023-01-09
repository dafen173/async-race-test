/* eslint-disable import/no-cycle */
import { winner } from '../components/startCar';
import { createWinner } from '../components/createWinner';
import { interval, BASE_URL } from '../frontend';
import { offResetBtnAndAlert } from '../components/offResetBtnAndAlert';
import { editWinner } from '../components/editWinner';

export async function checkWinner() {
  if (winner[0]) {
    const resWinner = await fetch(`${BASE_URL}/winners`);
    const winnerCarResults = await resWinner.json();

    const search = winnerCarResults.find((x) => x.id === winner[0]);
    if (search === undefined) {
    //   console.log('winner id is not here yet!');
      createWinner(winner[0]);
      clearInterval(interval);
      offResetBtnAndAlert(winner[0]);
    } else {
    //   console.log('go to editWinter');
      editWinner(winner[0]);
      clearInterval(interval);
      offResetBtnAndAlert(winner[0]);
    }
  }
}

export default checkWinner;
