import { BASE_URL } from "../frontend";
import { STOP_CAR_PLACE } from "../frontend";


export async function startCar(id) {
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

        if (newPos < STOP_CAR_PLACE && carImage.classList.contains('move')) {
            window.requestAnimationFrame(makeMove);
        }

        if (carImage.classList.contains('stop')) {
            carImage.style.left = 0 + 'px';
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