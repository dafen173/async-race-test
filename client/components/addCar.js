import { BASE_URL } from "../frontend";
import { nameField } from "../frontend";
import { colorField } from "../frontend";
import { carsRender } from "./carsRender";

export async function addCar() {
    // const input = document.getElementById('name');

    // const nameField = document.querySelector('#name')
    // const colorField = document.querySelector('#color')
    const car = {
        name: nameField.value,
        color: colorField.value
    }

    if(nameField) {
        const res = await fetch(`${BASE_URL}/garage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        });

        const addedCar = await res.json();
        console.log(addedCar);
        carsRender(addedCar);

        nameField.value = '';
        colorField.value = '#000000';
    }
}




