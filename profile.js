const sayFavColor = document.querySelector('#color')
const sayColor = () => {
    alert('My favorite color is blue! ')
}
sayFavColor.addEventListener('click', sayColor)

const sayFavPlace = document.querySelector('#place')
const sayPlace = () => {
    alert('My favorite place is Hawaii!')
}
sayFavPlace.addEventListener('click', sayPlace)

const sayFavRitual = document.querySelector('#ritual')
const sayRitual = () => {
    alert('My favorite ritual is Sunday dinner! ')
}
sayFavRitual.addEventListener('click', sayRitual)
