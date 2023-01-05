import { BASE_URL } from "../frontend";
// import st

export async function stopCar(id) {
    console.log(id);
    const res = await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`, {
        method: 'PATCH',
        // body: JSON.stringify(editCar)
    });
    const resStop = await res.json();

    // console.log(resStop);
    // console.log(resStop.velocity);
    const carImage = document.getElementById(`car-icon-${id}`);
    if(resStop.velocity === 0) {
        carImage.classList.remove("move");
        carImage.classList.add('stop');
    }
}






