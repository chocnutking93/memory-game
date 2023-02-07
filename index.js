const cubes = document.querySelectorAll(".cube");
const cubeContainer = document.querySelector(".box");
const startButton = document.querySelector(".begin");
const notice = document.querySelector(".notice");
const randomCube = cubes[Math.floor(Math.random() * cubes.length)];
let roundsWon = 0;
let rounds = 1;
let firstCube = false;
let previousCube;
let click;
let clickCount = 0;
const cubeArray = [];
const cubeArrayCopy = [];

// function randomBoxColor () {
//     cubes.forEach(cube => {
//         let redCube = cube[Math.floor(Math.random() * cubes.length)]
//         console.log(redCube)
//     })
// }

// let randomCube = cubes[Math.floor(Math.random() * cubes.length)]

function changeColor() {
  firstCube != firstCube;
  firstCube = cubes[Math.floor(Math.random() * cubes.length)];
  console.log(firstCube);
  firstCube.classList.add("red"); //need to somehow save this
  cubeArray.push(firstCube);
  console.log(cubeArray);
}

function unchangeColor() {
  setTimeout(() => {
    firstCube.classList.remove("red");
  }, 800);
}

function playerTurn() {
  cubes.forEach((cube) => {
    cube.addEventListener("click", (e) => {
      while (clickCount != cubeArray.length) {
        click = e.target;
        console.log(click);
        clickCount += 1;
        cubeArrayCopy.push(click);
      }
    });
  });
}

// function checkMatch() {
//   if (cubeArray === cubeArrayCopy) {
//     notice.innerText = "Nice, next level";
//   } else {
//     notice.innerText = "Game over, try again.";
//   }
// }

startButton.addEventListener("click", (e) => {
  for (let i = 0; i < rounds; i++) {
    changeColor();
    unchangeColor();
    playerTurn();
    //   checkMatch();
  }

  // firstCube = cubes[Math.floor(Math.random() * cubes.length)]

  // const randomCube = cubes[Math.floor(Math.random() * cubes.length)]

  // const randomRedCube = randomCube.style.backgroundColor = "#FF0000"
  // console.log(randomCube)

  // if (randomCube == randomRedCube) {
  //     return
  // }
  // randomCube.style.backgroundColor = "#FF0000"

  // for (let i = 0; i < 1; i++){
  //     return randomRedCube
  // }
});
