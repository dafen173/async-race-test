

export async function deleteCar(id) {
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






// export const deleteCar = (elemId) => {
//     console.log(elemId)
//     const element = document.getElementById(elemId)
//     element.remove()
//     try {
//         fetch(`${BASE_URL}/garage/${elemId}`, {
//             method: 'delete'
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }




