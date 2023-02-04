const cubes = document.querySelectorAll(".cube")
const cubeContainer = document.querySelector('.box')
const startButton = document.querySelector('.begin')


// function randomBoxColor () {
//     cubes.forEach(cube => {
//         let redCube = cube[Math.floor(Math.random() * cubes.length)]
//         console.log(redCube)
//     })
// }

let randomCube = cubes[Math.floor(Math.random() * cubes.length)]


function startGame () {
    
}



function checkMemory () {
    
}


startButton.addEventListener('click', e => {
    let randomCube = cubes[Math.floor(Math.random() * cubes.length)]
    console.log(randomCube) 
    randomCube.style.backgroundColor = "#FF0000"
})