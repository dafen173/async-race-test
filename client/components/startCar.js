import { BASE_URL } from "../frontend";
import { STOP_CAR_PLACE } from "../frontend";
import { winnerField } from "../frontend";
import { winnerParent } from "../frontend";

export const winner = [];


export async function startCar(id) {
    // winner = [];

    const res = await fetch(`${BASE_URL}/engine?id=${id}&status=started`, {
        method: 'PATCH',
        // body: JSON.stringify(editCar)
    });
    const resStart = await res.json();
    console.log(resStart);

    let carImage = document.getElementById(`car-icon-${id}`);
    carImage.classList.remove('stop');
    carImage.classList.add("move");

    let startTime = new Date().getTime();

    const makeMove = function () {
        let currTime = new Date().getTime();
        let newPos = (0 + ((currTime - startTime) / 1000) * resStart.velocity);
        carImage.style.left = newPos + 'px';

        if (newPos <= STOP_CAR_PLACE && carImage.classList.contains('move')) {
            window.requestAnimationFrame(makeMove);
        }

        if (carImage.classList.contains('stop')) {
            carImage.style.left = 0 + 'px';
        }

        if(newPos >= STOP_CAR_PLACE - 1) {
            console.log(id);
            winner.push(id);
            console.log(winner);
        }

        if(id == winner[0]) {
            // alert('winner is the ' + winner[0]);
            let test = document.createElement('div');
            test.id = 'winner';
            test.innerHTML = `The winner ID is the ${winner[0]}`;
            winnerParent.prepend(test);
            // winnerField.focus();
        }
    }
    makeMove();

    try {
        const resDrive = await fetch(`${BASE_URL}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
            // body: JSON.stringify(editCar)
        });
        const resDriveJson = await resDrive.json();
        console.log(resDriveJson);
    } catch (error) {
        console.log('ENGINE IS BROKEN!!!!!!!')
        console.log(error);
        carImage.classList.remove("move");
    }
}