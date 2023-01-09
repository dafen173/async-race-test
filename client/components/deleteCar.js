/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { BASE_URL } from '../frontend';

export async function deleteCar(id) {
  try {
    console.log(id);
    const res = await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data) {
      document.getElementById(`car${id}`).remove();
    }
  } catch (error) {
    console.error(error);
  }
}

export default deleteCar;
