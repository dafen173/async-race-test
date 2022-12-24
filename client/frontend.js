
const BASE_URL = 'http://localhost:3000';
const body = document.querySelector('body');

body.innerHTML = `
    <div class="row justify-content-md-center">
        <div class="col-4">
            <div class="col-6"><h1 class="h1">ASYNC RACE</h1></div>
            <div class="mb-3">
                <label for="name" class="form-label">ADD CAR</label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label"></label>
                <input type="color" id="color" class="form-control">
            </div>
            <button type="submit" id="carBtn" class="btn btn-primary">ADD CAR</button>

            <br>
            <br>

            <div class="mb-3">
                <label for="edit-name" class="form-label">EDIT CAR</label>
                <input type="text" id="edit-name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="edit-color" class="form-label"></label>
                <input type="color" id="edit-color" class="form-control">
            </div>
            <button type="submit" id="edit-car-btn" class="btn btn-primary">EDIT CAR</button>

            <br>
            <br>
        </div>
    </div>
    <div class="row justify-content-md-center">
        <div class="col text-center mt-5">
            <div class="row">
                <div class="row justify-content-md-center">
                    <div class="container col-4">
                        <div id="get_cars_result"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

document.getElementById('carBtn').addEventListener('click', async () => {
    // const input = document.getElementById('name');
    const nameField = document.querySelector('#name')
    const colorField = document.querySelector('#color')
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
})

async function getAllCars () {
    const res = await fetch(`${BASE_URL}/garage`);
    const cars = await res.json();
    console.log(cars);
    cars.forEach(element => {
        carsRender(element);
    });
}

window.addEventListener('DOMContentLoaded', getAllCars);

const carList = document.getElementById('get_cars_result');
function carsRender({id, name, color}) {
    // const carList = document.getElementById('get_cars_result');
    carList.insertAdjacentHTML('beforeend', `
    <div className="col-4" id="car${id}">
        <ul class="list-group">
            <li class="list-group-item">${name}, color: ${color}</li>
        </ul>

        <svg fill=${color} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 460.384 460.384" style="enable-background:new 0 0 460.384 460.384;" xml:space="preserve" width="100px" height="87px" >
            <g>
                <path d="M95.252,283.11c-13.807,0-25.039,11.232-25.039,25.039s11.232,25.039,25.039,25.039s25.039-11.233,25.039-25.039
                    S109.059,283.11,95.252,283.11z M95.252,318.188c-5.536,0-10.039-4.504-10.039-10.039s4.503-10.039,10.039-10.039
                    s10.039,4.503,10.039,10.039S100.788,318.188,95.252,318.188z"/>
                <path d="M357.012,283.11c-13.807,0-25.04,11.232-25.04,25.039s11.233,25.039,25.04,25.039c13.806,0,25.038-11.233,25.038-25.039
                    S370.818,283.11,357.012,283.11z M357.012,318.188c-5.536,0-10.04-4.504-10.04-10.039s4.504-10.039,10.04-10.039
                    c5.535,0,10.038,4.503,10.038,10.039S362.547,318.188,357.012,318.188z"/>
                <path d="M409.227,196.421l-66.917-7.645l-35.714-58.056c-10.905-17.728-30.61-28.741-51.424-28.741H133.676
                    c-34.925,0-65.792,23.518-75.063,57.193l-0.948,3.445c-4.607,16.733-17.845,30.052-34.549,34.762
                    C9.506,201.217,0,213.773,0,227.914v83.012c0,4.142,3.358,7.5,7.5,7.5h38.557c4.757,22.798,25.006,39.978,49.195,39.978
                    s44.438-17.18,49.195-39.978h163.37c4.757,22.798,25.006,39.978,49.195,39.978s44.438-17.18,49.195-39.978h40.477
                    c3.813,0,7.02-2.861,7.452-6.65l5.874-51.483C463.614,228.69,440.834,200.037,409.227,196.421z M15,294.313h31.949
                    c-0.843,2.938-1.43,5.983-1.724,9.113H15V294.313z M95.252,343.404c-19.44,0-35.255-15.815-35.255-35.255
                    s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S114.692,343.404,95.252,343.404z M357.012,343.404
                    c-19.44,0-35.255-15.815-35.255-35.255s15.815-35.256,35.255-35.256s35.255,15.816,35.255,35.256S376.452,343.404,357.012,343.404z
                    M357.012,257.893c-16.987,0-32.021,8.48-41.122,21.42H182.425c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h126.284
                    c-0.843,2.938-1.43,5.983-1.724,9.113H145.279c-2.389-25.504-23.909-45.533-50.027-45.533c-16.987,0-32.021,8.48-41.122,21.42H15
                    v-51.399c0-7.455,5.012-14.075,12.187-16.098c21.728-6.126,38.947-23.452,44.94-45.218l0.948-3.445
                    c7.484-27.186,32.405-46.174,60.601-46.174h121.496c15.643,0,30.452,8.277,38.647,21.6l37.626,61.164
                    c1.207,1.962,3.249,3.26,5.537,3.522l70.541,8.059c16.002,1.831,28.943,12.335,34.67,26.276h-23.413c-4.142,0-7.5,3.358-7.5,7.5
                    s3.358,7.5,7.5,7.5h26.578c0.052,1.975-0.023,3.975-0.253,5.993l-2.364,20.72h-44.608
                    C389.033,266.373,373.998,257.893,357.012,257.893z M407.038,303.426c-0.293-3.13-0.881-6.175-1.724-9.113h35.716l-1.04,9.113
                    H407.038z"/>
                <path d="M255.565,215.222h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76c4.142,0,7.5-3.358,7.5-7.5
                    S259.708,215.222,255.565,215.222z"/>
                <path d="M154.846,222.722c0-4.142-3.358-7.5-7.5-7.5h-15.76c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h15.76
                    C151.488,230.222,154.846,226.864,154.846,222.722z"/>
                <path d="M164.136,283.941c-1.314-3.113-4.658-5.069-8.025-4.546c-3.049,0.474-5.522,2.768-6.213,5.776
                    c-1.496,6.51,6.051,11.564,11.54,7.829C164.343,291.024,165.476,287.186,164.136,283.941
                    C163.946,283.491,164.326,284.401,164.136,283.941z"/>
                <path d="M286.014,143.391c-6.531-10.637-18.348-17.245-30.841-17.245h-121.5c-24.087,0-45.371,16.217-51.761,39.443l-0.943,3.438
                    c-2.468,8.956-6.268,24.34-6.429,24.991c-0.553,2.238-0.045,4.606,1.376,6.422c1.422,1.815,3.599,2.876,5.905,2.876h227.64
                    c2.717,0,5.222-1.469,6.547-3.841c1.326-2.372,1.265-5.275-0.159-7.589L286.014,143.391z M199.352,141.145v47.169h-69.054v-47.018
                    c1.115-0.098,2.24-0.151,3.375-0.151H199.352z M95.432,173.002l0.944-3.441c2.86-10.395,9.865-18.839,18.922-23.747v42.499H91.432
                    C92.697,183.321,94.242,177.323,95.432,173.002z M214.352,188.314v-47.169h40.821c7.316,0,14.235,3.868,18.062,10.1l22.807,37.069
                    H214.352z"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

        <br>
        <button onclick="selectCar(${id})" type="button" class="btn btn-primary">Select car</button>
        <button onclick="deleteCar(${id})" type="button" class="btn btn-primary">Delete car</button>
        <br>
        <br>
        <br>
        <br>
    </div>
    `)
}


const editNameField = document.getElementById('edit-name');
const editColorField = document.getElementById('edit-color');
const editCarBtn = document.getElementById('edit-car-btn');

async function selectCar(id) {
    const res = await fetch(`${BASE_URL}/garage/${id}`);
    const selectedCar = await res.json();
    editNameField.value = selectedCar.name;
    editColorField.value = selectedCar.color;
    editNameField.focus();
    editNameField.setAttribute('data-id', id);
    console.log(editNameField.getAttribute('data-id'));
}
// editCarBtn.addEventListener('click', editCar(editNameField.getAttribute('data-id')))
// editCarBtn.addEventListener('click', editCar('ffffff'))
editCarBtn.addEventListener('click', async () => {
    const editId = editNameField.getAttribute('data-id')
    // console.log('async ' + editNameField.getAttribute('data-id'))
    console.log('async editId ' + editId)

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
        getAllCars ();

        editNameField.value = '';
        editColorField.value = '#000000';
    }

})



// async 
// function editCar(id) {

//     console.log('async ' + id)
//     // const editCar = {
//     //     name: editNameField.value,
//     //     color: editColorField.value
//     // }

//     // if(editNameField) {
//     //     const res = await fetch(`${BASE_URL}/garage/${id}`, {
//     //         method: 'PUT',
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //         body: JSON.stringify(editCar)
//     //     });
//     //     const resEditCar = await res.json();
//     //     console.log(resEditCar);
//     //     // carsRender(addedCar);
//     //     editNameField.value = '';
//     //     editColorField.value = '#000000';
//     // }
// }

async function deleteCar(id) {
    console.log(id)
    const res = await fetch(`${BASE_URL}/garage/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await res.json();
    console.log(data);

    if (data){
        document.getElementById(`car${id}`).remove();
    }
}





