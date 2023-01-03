import { BASE_URL } from "../frontend";
import { getAllCars } from "./getAllCars";

export async function deleteCar(id) {
    try {
        console.log(id)
        const res = await fetch(`${BASE_URL}/garage/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if (data){
            document.getElementById(`car${id}`).remove();
            // getAllCars();
        }
    } catch (error) {
        console.error(error);
    }
}




