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

// function randomBoxColor () {
//     cubes.forEach(cube => {
//         let redCube = cube[Math.floor(Math.random() * cubes.length)]
//         console.log(redCube)
//     })
// }

// let randomCube = cubes[Math.floor(Math.random() * cubes.length)]

function changeColor() {
  firstCube != firstCube;
  const newCube = cubes[Math.floor(Math.random() * cubes.length)];
  console.log(newCube.dataset);

  for (let i = 0; i < rounds; i++) {
    newCube.classList.add("red");
    cubeArray.push(newCube);
    console.log(cubeArray);
  }
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



// function reiterateSequence() {
//   let index = 0;
//   while (index < cubeArray.length) {

//     setInterval(() => {
//       cubeArray[index].classList.add("red");
//     }, 700)
    
//     setInterval(() => {
//       cubeArray[index].classList.remove("red");
//     },700)
//     index++;
//   }
// }

// function reiterateSequence () {
//   for (let i = 0; i < cubeArray.length; i++){

//     setInterval(() => {
//       cubeArray[i].classList.add("red");
//       console.log(cubeArray)
//     }, 1000)

//     setInterval(() => {
//       cubeArray[i].classList.remove("red");
      
//     },500)
//   }
// }

// function reiterateSequence () {
//   const timerId = setInterval(() => {
//     count+=1
//     console.log(count)
//   }, 1000)
//   setTimeout(() => {
//     clearInterval(timerId);
//     console.log('stopped at 5 seconds')
//   },5000)
// }

// function reiterateSequence () {
//   let timesRun = 0;
//   let i = 0;
//   const timerId = setInterval(() => {
//     timesRun += 1;
//     ++cubeArray[i]

//     if (timesRun === cubeArray.length) {
//       console.log('all done')
//       clearInterval(timerId)
//     }
//   },1000)
// }

// function reiterateSequence () {
//   let i = 0;
//   console.log(cubeArray[i].dataset)
//   if (i < cubeArray.length) {
//     setTimeout(() => {
//       i+=1;
//       reiterateSequence(i)
//     },1000)
//   }
// }

function reiterateSequence () {
  let i = 0;
  const interval = setInterval(() => {
    console.log(cubeArray[i++]);
    if (i === cubeArray.length) {
      clearInterval(interval);
    }
  },1000)
}


startButton.addEventListener("click", (e) => {
  changeColor();
  unchangeColor();
  playerTurn();


});

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
