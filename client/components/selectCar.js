/* eslint-disable import/no-cycle */
import { BASE_URL, editNameField, editColorField } from '../frontend';

export async function selectCar(id) {
  const res = await fetch(`${BASE_URL}/garage/${id}`);
  const selectedCar = await res.json();
  editNameField.value = selectedCar.name;
  editColorField.value = selectedCar.color;
  editNameField.focus();
  editNameField.setAttribute('data-id', id);
}

export default selectCar;
