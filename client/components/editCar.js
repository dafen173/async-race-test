/* eslint-disable import/no-cycle */
import {
  BASE_URL, editNameField, editColorField, carList,
} from '../frontend';
import { getAllCars } from './getAllCars';

export async function editCar() {
  const editId = editNameField.getAttribute('data-id');
  const editCarObj = {
    name: editNameField.value,
    color: editColorField.value,
  };

  if (editNameField) {
    const res = await fetch(`${BASE_URL}/garage/${editId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editCarObj),
    });
    await res.json();
    carList.innerHTML = '';
    getAllCars();

    editNameField.value = '';
    editColorField.value = '#000000';
  }
}

export default editCar;
