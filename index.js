const cubes = document.querySelectorAll(".cube");
const cubeContainer = document.querySelector(".box");
const startButton = document.querySelector(".begin");
const notice = document.querySelector(".notice");
const randomCube = cubes[Math.floor(Math.random() * cubes.length)];
let roundsWon = 0;
let rounds = 1;
let firstCube = false;
let count = 0;

let previousCube;
let click;
let clickCount = 0;

const cubeArray = [];
const cubeArrayCopy = [];

const compareArrays = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);

function changeColor() {

  const newCube = cubes[Math.floor(Math.random() * cubes.length)];
  console.log(newCube.dataset);

  newCube.classList.add("red");
  cubeArray.push(newCube); 
  console.log(cubeArray);
}

function unchangeColor() {
  let index = 0;
  setTimeout(() => {
    while (index < cubeArray.length) {
      cubeArray[index].classList.remove("red");
      index++;
    }
  }, 700);
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

      if (compareArrays(cubeArray, cubeArrayCopy)) {
        notice.innerText = "Nice, next round!";
        roundsWon += 1;
        rounds += 1;

        return;
      } else {
        notice.innerText = "Sorry, try again!";
        return;
      }
    });
  });
}

function reiterateSequence() {
  let i = 0;

  
  const interval = setInterval(() => {

    console.log(cubeArray[i++]);
    for (let i = 0; i < cubeArray.length; i++){
      setTimeout(() => {
        cubeArray[i].classList.add('red');
      }, i*1000)
    }

    if (i === cubeArray.length) {
      clearInterval(interval);
    }
  }, 1000);
}

startButton.addEventListener("click", (e) => {
  changeColor();
  unchangeColor();
  playerTurn();
});

