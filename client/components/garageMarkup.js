import { body } from "../frontend";

export const garageMarkup = () => {
    console.log('garageMarkup');

    return body.innerHTML = `
    <div class="mt-4 ml-4" id='garage-page'>
        <div class="col-2">
            <div class="col-6"><h1 class="h1">ASYNC RACE</h1></div>
            <div class='col-4'>
                <button type="button" id="garage-btn" class="garage-btn btn btn-primary">TO GARAGE</button>
            </div>
            <br>
            <br>
            <div class='col-4'>
                <button type="button" id="winners-btn" class="winners-btn btn btn-primary">TO WINNERS</button>
            </div>
            <br>
            <br>
            <div class="mb-1">
                <label for="name" class="form-label">ADD CAR</label>
                <input type="text" id="name" class="form-control">
            </div>
            <div class="mb-3">
                <label for="color" class="form-label"></label>
                <input type="color" id="color" class="form-control">
            </div>
            <button type="submit" id="add-car-btn" class="btn btn-primary">ADD CAR</button>
            <br>
            <br>
            <br>
            <br>
            <div class="mb-1">
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
            <br>
            <br>
            <button type="submit" id="race-btn" class="btn btn-primary">RACE</button>
            <button type="submit" id="reset-btn" class="btn btn-primary">RESET</button>
            <br>
            <br>
            <button type="submit" id="generate-car-btn" class="btn btn-primary">GENERATE CARS</button>
            <br>
            <br>
        </div>

        <div class='cars'>
            <div class="col mt-5">
                <div class="row">
                    <div class="row">
                        <div class="col-4">
                            <div id="get_cars_result"></div>
                        </div>
                        <div class="pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-4 ml-4" id='winners-page'>
        <div class="col-2">
            <div class="col-6"><h1 class="h1">WINNERS</h1></div>
        </div>
        <div class='col-4'>
                <button type="button" id="garage-btn-from-winners" class="garage-btn btn btn-primary">TO GARAGE</button>
            </div>
            <br>
            <br>
            <div class='col-4'>
                <button type="button" id="winners-btn-from-winners" class="winners-btn btn btn-primary">TO WINNERS</button>
            </div>
            <br>
            <br>

            <table>
                <thead>
                    <tr class='thead'>
                        <th>№</th>
                        <th>Image of the car</th>
                        <th>Name of the car</th>
                        <th>Wins number</th>
                        <th>Best time in seconds</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
    `
}