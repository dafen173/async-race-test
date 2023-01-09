/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import {
  BASE_URL, STOP_CAR_PLACE,
} from '../frontend';

export const winner = [];
export const carsTime = [];

export async function startCar(id) {
  const res = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const resStart = await res.json();
  // console.log(resStart);

  const carImage = document.getElementById(`car-icon-${id}`);
  carImage.classList.remove('stop');
  carImage.classList.add('move');

  const startTime = new Date().getTime();

  const makeMove = () => {
    const currTime = new Date().getTime();
    const newPos = (0 + ((currTime - startTime) / 1000) * resStart.velocity);
    carImage.style.left = `${newPos}px`;

    if (newPos <= STOP_CAR_PLACE && carImage.classList.contains('move')) {
      window.requestAnimationFrame(makeMove);
    }

    if (carImage.classList.contains('stop')) {
      carImage.style.left = `${0}px`;
    }

    if (newPos >= STOP_CAR_PLACE - 1) {
      winner.push(id);
      // console.log(winner);

      const finishTime = new Date().getTime();
      const winnerTime = (finishTime - startTime) / 1000;
      carsTime.push(winnerTime);
    }
  };
  makeMove();

  try {
    const resDrive = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    const resDriveJson = await resDrive.json();
    console.log(resDriveJson);
  } catch (error) {
    console.log('ENGINE IS BROKEN!');
    console.log(error);
    carImage.classList.remove('move');
  }
}
