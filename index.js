const cubes = document.querySelectorAll(".cube");
const cubeContainer = document.querySelector(".box");
const startButton = document.querySelector(".begin");
const notice = document.querySelector(".notice");

let roundsWon = 0;
let rounds = 1;
let count = 0;
let clickCount;
let click;
let nextTurn = false;
let playerTurn1 = false;
let computerTurn;

const cubeArray = [];
let cubeArrayCopy = [];

// const compareArrays = (a, b) =>
//   a.length === b.length && a.every((v, i) => v === b[i]);

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < cubeArray.length; i++) {
    if (array1[i] === array2[i]) {
      rounds += 1;
      roundsWon += 1;
      notice.innerText = "Nice, next round";
    } else {
      notice.innerText = "Sorry try again";
    }
  }
}

function showRandomCube() {
  newCube = cubes[Math.floor(Math.random() * cubes.length)];

  newCube.classList.add("red");
  cubeArray.push(newCube);
  console.log(cubeArray);
}

function changeUnchange() {
  for (let i = 0; i < rounds; i++) {
    showRandomCube();
    hideRandomCube();
  }
}

function hideRandomCube() {
  let index = 0;
  setTimeout(() => {
    while (index < cubeArray.length) {
      cubeArray[index].classList.remove("red");
      index++;
    }
  }, 500);
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

// function playerTurn () {
//   cubes.forEach(cube => {
//     cube.addEventListener('click', e => {
//       for (let i = 0; i < cubeArray.length; i++){
//         click = e.target;
//         console.log(click);
//         cubeArrayCopy.push(click)
//         return cubeArrayCopy
//       }
//     })
//   })
// }

function nextRound() {
  for (let i = 0; i < cubeArray.length; i++) {
    setTimeout(() => {
      cubeArray[i].classList.add("red");
      setTimeout(() => {
        cubeArray[i].classList.remove("red");
      }, 500);
    }, i * 500);
  }
}

function logRound () {
  console.log('hi')
}

function nextRoundPlus() {
  for (let i = 0; i < cubeArray.length; i++) {
    setTimeout(() => {
      cubeArray[i].classList.add("red");
      console.log(cubeArray[i]);
      if (i === cubeArray.length - 1) {
        setTimeout(changeUnchange,1000)
      }
      setTimeout(() => {
        cubeArray[i].classList.remove("red");
      }, 500);
    }, i * 1000);
  }
}

// function reiterateSequence() {
//   let i = 0;

//   const interval = setInterval(() => {
//     console.log(cubeArray[i++]);
//     for (let i = 0; i < cubeArray.length; i++) {
//       setTimeout(() => {
//         cubeArray[i].classList.add("red");

//         setTimeout(() => {
//           cubeArray[i].classList.remove("red");
//         }, i * 500);
//       }, i * 1000);
//     }

//     if (i === cubeArray.length) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

startButton.addEventListener("click", (e) => {
  changeUnchange();
  playerTurn();
  // compareArrays(cubeArray, cubeArrayCopy)
});
