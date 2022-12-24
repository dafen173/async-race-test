// import {deleteCar} from "./components/deleteCar"

const BASE_URL = 'http://localhost:3000'



// window.onload = function() {

    const body = document.querySelector('body')
    body.innerHTML = `

    <div class="row justify-content-md-center">
        <div class="col-4">

            <div class="col-6"><h1 class="h1">ASYNC RACE</h1></div>

            <div class="mb-3">
                <label for="name" class="form-label"></label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label"></label>
                <input type="color" id="color" class="form-control">
            </div>
            <button type="submit" id="carBtn" class="btn btn-primary">ADD CAR</button>
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
    // const getPostBtn = document.querySelector('#getPostBtn')
    const resultField = document.querySelector('#get_cars_result')

    

    // getPostBtn.addEventListener('click', async () => {
    //     const result = await getPostData()
    //     result.forEach(element => {
    //         resultField.innerHTML += renderData(element)
    //     })
    // })
    


    // function deleteCar (elemId) {
    //     console.log(elemId)
    //     // elemId.preventDefault()
    
    //     try {
    //         const response = fetch(`${BASE_URL}/garage/${elemId}`, {
    //             method: 'delete'
    //         })
    
    //         // const json = await response.json()
    //         console.log('yooooooooooo')
    //         loadCars()
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }


    const getPostData = async () => {
        const response = await fetch(`${BASE_URL}/garage`)
        //console.log(await response.json())
        return await response.json()
    }


    const deleteCar = (elemId) => {
        console.log(elemId)
        const element = document.getElementById(elemId)

        if(element){
            element.remove()
            console.log('yooooo')
        }
        
        try {
            fetch(`${BASE_URL}/garage/${elemId}`, {
                method: 'delete'
            })
        } catch (error) {
            console.error(error)
        }
    }


    const renderData = ({ name, color, id}) => {
        return `
        <div className="col-4" id=${id}>
            <ul class="list-group">
                <li class="list-group-item">${name}, color: ${color}</li>
            </ul>
            <button type="submit" class="btn btn-primary">Edit car</button>
            <button type="button" class="btn btn-primary" onClick=${deleteCar(id)}>Delete car</button>
        </div>
        `
    }
    // <button onClick="deleteCar(${id})" type="submit" class="btn btn-primary">Delete car</button>

    const loadCars = async () => {
        const result = await getPostData()
        console.log(result)
        result.forEach(element => {
            resultField.innerHTML += renderData(element)
        })
    }
    loadCars()



 


    // const removeBtn = document.querySelector(`[data-remove-button-id="${doc.id}"]`);



    const nameField = document.querySelector('#name')
    const colorField = document.querySelector('#color')
    const carBtn = document.querySelector('#carBtn')
    carBtn.addEventListener('click', () => createCar())
    const createCar = async () => {
        const car = {
            name: nameField.value,
            color: colorField.value
        }

        try {
            const response = fetch(`${BASE_URL}/garage`, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(car),
            })
            resultField.innerHTML = ''
            loadCars()
            nameField.value = ''
            colorField.value = '#000000'
        } catch (error) {
            console.error(error)
        }
        console.log(car)
    }





// }











