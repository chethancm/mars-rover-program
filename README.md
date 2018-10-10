# mars-rover-program
Move 3 rovers around a 10x10 grid with obstacles. 

## How does it work?

### Initial position:

Rovers rover1, rover2 and rover3 are positioned on [0,0], [1,0] and [2,0] respectively (grid's top-left corner) 
and looking north. There are some obstacles around the grid too. The grid can be printed on screen with function:

showGrid();

### Moving rovers:

In order to move a rover, you should choose the rover and the command.

Rover Name: rover1/rover2/rover3

Command: 'f' (goForward)/'b' (goBackward)/'r' (turnRight)/'l' (turnLeft)

move(roverName, "command");

#### Example:

move(rover3, "rrffflff");
