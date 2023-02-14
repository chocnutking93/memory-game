const cubes = document.querySelectorAll(".cube");
const cubeContainer = document.querySelector(".box");
const startButton = document.querySelector(".begin");
const notice = document.querySelector(".notice");

let roundsWon = 0;
let rounds = 1;
let count = 0;
let clickCount;
let click;

let cubeArray = [];
let cubeArrayCopy = [];
newCube = cubes[Math.floor(Math.random() * cubes.length)];

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("failure");
    notice.innerText = `You won ${rounds} rounds, nice.`;
    // startButton.style.display = 'none'
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("failure");
      notice.innerText = `You lost, try agian. You completed ${rounds} rounds`
      setTimeout(resetBoard,5000)
      return false;
      // startButton.style.display = 'none'
    }
  }
  notice.innerText = `Round ${rounds}`;
  rounds += 1;
  clickCount = 0;
  cubeArrayCopy = [];
  setTimeout(computerTurn, 1000);
}

function resetBoard() {
  window.location.reload(true);
}

function showRandomCube() {
  newCube = cubes[Math.floor(Math.random() * cubes.length)];

  newCube.classList.add("red");
  cubeArray.push(newCube);
  console.log(cubeArray);
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

function showHideCube() {
  showRandomCube();
  hideRandomCube();
}

function computerTurn() {
  for (let i = 0; i < cubeArray.length; i++) {
    setTimeout(() => {
      cubeArray[i].classList.add("red");
      console.log(cubeArray[i]);
      if (i === cubeArray.length - 1) {
        setTimeout(showHideCube, 1000);
      }
      setTimeout(() => {
        cubeArray[i].classList.remove("red");
      }, 500);
    }, i * 1000);
  }
}

function startGame() {
  showHideCube();
}

startButton.addEventListener("click", startGame);

cubes.forEach((cube) => {
  clickCount = 0;
  cube.addEventListener("click", (e) => {
    clickCount += 1;
    console.log(clickCount);
    click = e.target;
    console.log(click);
    cubeArrayCopy.push(click);
    if (clickCount === cubeArray.length) {
      return arraysAreEqual(cubeArray, cubeArrayCopy);
    }
  });
});
