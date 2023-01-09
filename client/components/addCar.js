/* eslint-disable import/no-cycle */
import { BASE_URL, nameField, colorField } from '../frontend';
import { getAllCars } from './getAllCars';

export async function addCar() {
  const car = {
    name: nameField.value,
    color: colorField.value,
  };

  if (nameField) {
    // const res =
    await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    // const addedCar = await res.json();
    // console.log(addedCar);
    // carsRender(addedCar);
    getAllCars();

    nameField.value = '';
    colorField.value = '#000000';
  }
}

export default addCar;
