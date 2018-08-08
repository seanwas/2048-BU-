var spacesRemaining = 16; // variable to keep track of how many e,pty spaces are n the board
var shiftDirection = {
  // 37=Left), 39=Right, 38 = Up, 40=Down
  37: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  38: [0, 4, 8, 12, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15],
  39: [3, 2, 1, 0, 7, 6, 5, 4, 11, 10, 9, 8, 15, 14, 13, 12],
  40: [12, 8, 4, 0, 13, 9, 5, 1, 14, 10, 6, 2, 15, 11, 7, 3]
};
var cellGrab = document.querySelectorAll(".cell");

function startGame() {
  for (let i = 0; i < 2; i++) {
    assignRandomNumber(getRandomNumber(), getRandomSpace());
  }
}

//Function to Move and Merge pieces
function shiftBoard(keyCode) {
  checkRows(keyCode);
  removeBlock();
  assignColor();
  assignRandomNumber(getRandomNumber(), getRandomSpace());
}

function checkRows(keyCode) {
  for (let checkRows = 0; checkRows < 4; checkRows++) {
    checkCells(keyCode, checkRows);
  }
}

function checkCells(keyCode, checkRows) {
  for (let checkCells = 1; checkCells < 4; checkCells++) {
    checkMovements(keyCode, checkCells, checkRows);
  }
}

function checkMovements(keyCode, checkCells, checkRows) {
  for (let checkMovements = 0; checkMovements < checkCells; checkMovements++) {
    var currentMovement = checkRows * 4 + checkCells - checkMovements;
    var currentInstance = shiftDirection[keyCode][currentMovement];
    var targetInstance = shiftDirection[keyCode][currentMovement - 1];
    var currentCell = document.querySelectorAll(".cell")[currentInstance]
      .innerHTML;
    var targetCell = document.querySelectorAll(".cell")[targetInstance]
      .innerHTML;
    // console.log("(currentCell) " + currentCell + " (TargetCell) " + targetCell);
    checkMove(
      keyCode,
      currentCell,
      targetCell,
      currentInstance,
      targetInstance
    );
  }
}

function checkMove(
  keyCode,
  currentCell,
  targetCell,
  currentInstance,
  targetInstance
) {
  if (targetCell === "&nbsp;") {
    moveCell(currentInstance, targetInstance);
  } else if (parseInt(targetCell) === parseInt(currentCell)) {
    // Added a "B" at the start and the end of the HTML to temprarily block future merges. Will be removed before turn is over
    var totalMergeAmount = parseInt(currentCell) + parseInt(targetCell);
    addScore(totalMergeAmount);
    document.querySelectorAll(".cell")[currentInstance].innerHTML =
      "B" + totalMergeAmount + "B";
    moveCell(currentInstance, targetInstance);
  } else {
    return;
  }
}

function addScore(totalMergeAmount) {
  var myScore = parseInt(document.querySelector(".my-score").innerHTML);
  var bestScore = parseInt(document.querySelector(".best-score").innerHTML);
  var newScore = myScore + totalMergeAmount;
  if (totalMergeAmount===2048){
    alert ("CONGRATULATIONS!! You won!")
  }
  document.querySelector(".my-score").innerHTML = newScore;
  if (newScore > bestScore) {
    document.querySelector(".best-score").innerHTML = newScore;
  }

}

function moveCell(currentInstance, targetInstance) {
  // Move Cell from Location to New Location
  document.querySelectorAll(".cell")[
    targetInstance
  ].innerHTML = document.querySelectorAll(".cell")[currentInstance].innerHTML;

  // Update CurrentCell.html = "&nbsp;"
  document.querySelectorAll(".cell")[currentInstance].innerHTML = "&nbsp;";
}

// Assign colors to all 16 cells based on HTML
function assignColor() {
  for (let i = 0; i < 16; i++) {
    cellHTML = document.querySelectorAll(".cell")[i].innerHTML;
    if (cellHTML === "&nbsp;") {
      tintBackground = "lightgrey";
      tintColor = "black";
    } else {
      if (cellHTML === "2") tintBackground = "pink";
      if (parseInt(cellHTML) === 4) tintBackground = "lightblue";
      if (parseInt(cellHTML) === 8) tintBackground = "orange";
      if (parseInt(cellHTML) === 16) tintBackground = "yellow";
      if (parseInt(cellHTML) === 32) tintBackground = "violet";
      if (parseInt(cellHTML) === 64) tintBackground = "salmon";
      if (parseInt(cellHTML) === 128) tintBackground = "chocolate";
      if (parseInt(cellHTML) === 256) tintBackground = "red";
      if (parseInt(cellHTML) === 512) tintBackground = "purple";
      if (parseInt(cellHTML) === 1024) tintBackground = "green";
      if (parseInt(cellHTML) === 2048) tintBackground = "blue";

      parseInt(cellHTML) < 32 ? (tintColor = "black") : (tintColor = "white");
    }

    document.querySelectorAll(".cell")[
      i
    ].style.backgroundColor = tintBackground;

    document.querySelectorAll(".cell")[i].style.color = tintColor;
  }
}

//Remove the "B" at the start and end of the HTML that was placed to block merging
function removeBlock() {
  for (let i = 0; i < 16; i++) {
    cellHTML = document.querySelectorAll(".cell")[i].innerHTML;

    if (cellHTML.charAt(cellHTML.length - 1) === "B") {
      document.querySelectorAll(".cell")[i].innerHTML = cellHTML.slice(
        1,
        cellHTML.length - 1
      );
    }
  }
}


function newGame() {
  //Set myScore to 0
  document.querySelector(".my-score").innerHTML = 0;
  
  //Set Grid Elelemnets to blank
  for (let i = 0; i < 16; i++) {
    document.querySelectorAll(".cell")[i].innerHTML = "&nbsp;";
  }
  assignColor()
  startGame()
}

document.querySelector(".new-game").addEventListener('click', newGame);


document.addEventListener("keydown", function(e) {
  // Call function if up,dow,left,right keys are pressed
  if (e.keyCode > 36 && e.keyCode < 41) shiftBoard(e.keyCode);
});


startGame();
