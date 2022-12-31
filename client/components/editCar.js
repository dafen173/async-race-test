import { BASE_URL } from "../frontend";
import { editNameField } from "../frontend";
import { editColorField } from "../frontend";
import { carList } from "../frontend";
import { getAllCars } from "./getAllCars";


export async function editCar() {
    const editId = editNameField.getAttribute('data-id')
    // console.log('async ' + editNameField.getAttribute('data-id'))
    // console.log('async editId ' + editId)
    const editCar = {
        name: editNameField.value,
        color: editColorField.value
    }
    // console.log(editCar)

    if(editNameField) {
        const res = await fetch(`${BASE_URL}/garage/${editId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editCar)
        });
        const resEditCar = await res.json();
        console.log(resEditCar)
        // console.log('response ' + resEditCar.id);
        // carsRender(addedCar);
        carList.innerHTML = '';
        getAllCars();

        editNameField.value = '';
        editColorField.value = '#000000';
    }
}