// Rover Object Goes Here
// ======================
var rover1 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  numMoves: 0,
  limitNorth: true,
  limitSouth: false,
  limitEast: false,
  limitWest: true,
  name: "R1"
}

var rover2 = {
  direction: "N",
  x: 1,
  y: 0,
  travelLog: [],
  numMoves: 0,
  limitNorth: true,
  limitSouth: false,
  limitEast: false,
  limitWest: false,
  name: "R2"
}

var rover3 = {
  direction: "N",
  x: 2,
  y: 0,
  travelLog: [],
  numMoves: 0,
  limitNorth: true,
  limitSouth: false,
  limitEast: false,
  limitWest: false,
  name: "R3"
}
// ======================

//Variables

var grid = 
[['R1', 'R2', 'R3', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '', '', ''],
['', '', 'O', '', '', '', 'O', '', '', ''],
['', '', '', '', '', '', 'O', '', '', ''],
['', '', '', '', '', '', 'O', '', '', ''],
['', '', '', 'O', '', '', '', '', '', ''],
['', '', '', 'O', '', '', '', '', '', ''],
['', '', '', 'O', '', '', '', '', '', ''],
['', '', '', '', '', '', 'O', 'O', '', ''],
['', '', '', '', '', '', '', '', '', '']]

//Functions

// Turns the rover left
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;

    case "W":
      rover.direction = "S";
      break;
  }

}

// Turns the rover right
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
}

// Moves the rover one space forward
function moveForward(rover){
  console.log("moveForward was called");
  
  switch (rover.direction){

    case "N":
      if (!rover.limitNorth){                                     // check if grid's limit in front
        if (!grid[rover.y - 1][rover.x]){                         // check if space in front is empty
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];   // update travelLog
          rover.numMoves++;
          rover.y--;
          updateGrid(rover);
        }else{
          if (grid[rover.y - 1][rover.x] === 'O'){                // check if object or rover in front
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "S":
      if (!rover.limitSouth){
        if (!grid[rover.y + 1][rover.x]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.y++;
          updateGrid(rover);
        }else{
          if (grid[rover.y + 1][rover.x] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "E":
      if (!rover.limitEast){
        if (!grid[rover.y][rover.x + 1]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.x++;
          updateGrid(rover);
        }else{
          if (grid[rover.y][rover.x + 1] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "W":
      if (!rover.limitWest){
        if (!grid[rover.y][rover.x - 1]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.x--;
          updateGrid(rover);
        }else{
          if (grid[rover.y][rover.x - 1] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;
  }

  updateLimits(rover);

  showPosition(rover);
}

// Moves the rover one space backwards
function moveBackward(rover){
  console.log("moveBackward was called");
  
  switch (rover.direction){

    case "S":
      if (!rover.limitNorth){
        if (!grid[rover.y - 1][rover.x]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.y--;
          updateGrid(rover);
        }else{
          if (grid[rover.y - 1][rover.x] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "N":
      if (!rover.limitSouth){
        if (!grid[rover.y + 1][rover.x]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.y++;
          updateGrid(rover);
        }else{
          if (grid[rover.y + 1][rover.x] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "W":
      if (!rover.limitEast){
        if (!grid[rover.y][rover.x + 1]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.x++;
          updateGrid(rover);
        }else{
          if (grid[rover.y][rover.x + 1] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;

    case "E":
      if (!rover.limitWest){
        if (!grid[rover.y][rover.x - 1]){
          rover.travelLog[rover.numMoves] = [rover.x, rover.y];
          rover.numMoves++;
          rover.x--;
          updateGrid(rover);
        }else{
          if (grid[rover.y][rover.x - 1] === 'O'){
            console.log("Obstacle in front!");
          }else{
            console.log("Rover in front!");
          }
        }
      }else{
        console.log("Off limits!");
      }
      break;
  }

  updateLimits(rover);

  showPosition(rover);
  }
  
// Reads moving command and moves rover
function move(rover, command){

  var validCommand = true;

  // Command validation
  var i = 0;
  while (validCommand && i < command.length){
    if (command[i] !== 'f' && command[i] !== 'b' && command[i] !== 'r' && command[i] !== 'l'){
      validCommand = false;
    }
    i++;
  }

  // Moving rover
  if (validCommand){
    for (i = 0; i < command.length; i++){
      switch (command[i]){
        case "f":               // forward
          moveForward(rover);
          break;
        case "b":               // backwards
          moveBackward(rover);
          break;
        case "r":               // right
          turnRight(rover);
          break;
        case "l":               // left
          turnLeft(rover);
          break;
        default:
          break;
      }
    }
  console.log(rover.travelLog);
  }else {
    console.log("Wrong command! Only 'f', 'b', 'r' and 'l' admitted." );
  }

}

// Print current's rover position
function showPosition (rover){
  console.log ('Position: ' + rover.x + ', ' + rover.y);
}

// Update grid limits for each rover
function updateLimits (rover){

  // check if rover is in the grid's limit and the limit variable is deactivated
  if (rover.x === 0 || rover.x === 9 || rover.y === 0 || rover.y === 9){
    if (rover.x === 0 && !rover.limitWest){
      rover.limitWest = true;
    }else if (rover.x === 9 && !rover.limitEast){
      rover.limitEast = true;
    }else if (rover.y === 0 && !rover.limitNorth){
      rover.limitNorth = true;
    }else if (rover.y === 9 && !rover.limitSouth){
      rover.limitSouth = true;
    }
  }
  
  // check if rover is not in the grid's limit and the limit variable is activated
  if (rover.limitNorth || rover.limitSouth || rover.limitEast || rover.limitWest){
    if (rover.limitNorth && rover.y !== 0){
      rover.limitNorth = false;
    }else if (rover.limitSouth && rover.y !== 9){
      rover.limitSouth = false;
    }else if (rover.limitEast && rover.x !== 9){
      rover.limitEast = false;
    }else if (rover.limitWest && rover.x !== 0){
      rover.limitWest = false;
    }
  }
  
}

// Update grid
function updateGrid(rover) {
  
  grid[rover.y][rover.x] = rover.name;    // moves rover to the new position in the grid

  grid[rover.travelLog[rover.travelLog.length - 1][1]][rover.travelLog[rover.travelLog.length - 1][0]] = '';    // leaves the last position empty
}

// Print grid
function showGrid (){
  console.log(grid);
}