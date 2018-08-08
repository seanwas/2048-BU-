//Get either a 2 or 4 to the gameboard in one of teh open spaces
function getRandomNumber() {
  return (Math.floor(Math.random() * 2) + 1) * 2;
}

// Get a random number up to the remanining emptyspaces on the board
function getRandomSpace() {
  spacesRemaining = showManyEmptySpace();
  return Math.floor(Math.random() * spacesRemaining);
}
function showManyEmptySpace() {
  var emptySpace = 0;
  for (let i = 0; i < 16; i++) {
    if (document.querySelectorAll(".cell")[i].innerHTML === "&nbsp;") {
      emptySpace += 1;
    }
  }
  return emptySpace;
}

//Find and return nth empty space on the grid
function getEmptySpace(randomSpace = 0) {
  var emptySpace = 0;
  for (let i = 0; i < 16; i++) {
    if (document.querySelectorAll(".cell")[i].innerHTML === "&nbsp;") {
      if (emptySpace === randomSpace) {
        return i;
      } else {
        emptySpace += 1;
      }
    }
  }
}

// Assign the Random Number to the Random Empty Space on the board
function assignRandomNumber(randomNumber, randomSpace) {
  if (spacesRemaining !== 0) {
    var i = getEmptySpace(randomSpace);

    document.querySelectorAll(".cell")[i].innerHTML = randomNumber;
    if (randomNumber === 2) tintBackground = "pink";
    if (randomNumber === 4) tintBackground = "lightblue";

    tintColor = "black";

    document.querySelectorAll(".cell")[
      i
    ].style.backgroundColor = tintBackground;

    document.querySelectorAll(".cell")[i].style.color = tintColor;
    
  } else {
    declareLoss();
  }
}

function declareLoss() {
  alert("There are no more spots available. You Lose");
}
