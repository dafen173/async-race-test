

export const deleteCar = (elemId) => {
    console.log(elemId)
    const element = document.getElementById(elemId)
    element.remove()
    try {
        fetch(`${BASE_URL}/garage/${elemId}`, {
            method: 'delete'
        })
    } catch (error) {
        console.error(error)
    }
}



// const deleteCar = (elemId) => {
//     console.log(elemId)
//     document.getElementById(elemId).remove()
//     try {
//         const response = fetch(`${BASE_URL}/garage/${elemId}`, {
//             method: 'delete'
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }
