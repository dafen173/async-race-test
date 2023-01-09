/* eslint-disable import/no-cycle */
import { raceBtn, BASE_URL } from '../frontend';
import { carsPerPageArr } from './paginationGarage';
import { stopCar } from './stopCar';
import { winner } from './startCar';
import { createWinner } from './createWinner';
import { offResetBtnAndAlert } from './offResetBtnAndAlert';
import { editWinner } from './editWinner';

export const resetRace = () => {
  raceBtn.removeAttribute('disabled');
  winner.length = 0;

  // eslint-disable-next-line no-use-before-define
  const intervalAfterReset = setInterval(checkWinnerAfterReset, 2000);
  async function checkWinnerAfterReset() {
    if (winner[0]) {
      const resWinner = await fetch(`${BASE_URL}/winners`);
      const winnerCarResults = await resWinner.json();

      const search = winnerCarResults.find((x) => x.id === winner[0]);

      if (search === undefined) {
        // console.log('resetRace works... winner id is not here yet!');
        createWinner(winner[0]);
        clearInterval(intervalAfterReset);
        offResetBtnAndAlert(winner[0]);
      } else {
        // console.log('resetRace works... go to editWinter');
        editWinner(winner[0]);
        clearInterval(intervalAfterReset);
        offResetBtnAndAlert(winner[0]);
      }
    }
  }

  carsPerPageArr.forEach((el) => {
    stopCar(el.id);
    const carImagePerPage = document.getElementById(`car-icon-${el.id}`);
    carImagePerPage.style.left = `${0}px`;
  });
};

export default resetRace;
