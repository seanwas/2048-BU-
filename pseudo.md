# 2048

## Instructions: 2048 is a single-player sliding block puzzle game. The game's objective is to slide numbered tiles on a grid to combine them to create a tile with the number 2048

1. 2048 is played on a gray 4×4 grid, with numbered tiles that slide smoothly when a player moves them using the four arrow keys. Every turn, a new tile will randomly appear in an empty spot on the board with a value of either 2 or 4. Tiles slide as far as possible in the chosen direction until they are stopped by either another tile or the edge of the grid. If two tiles of the same number collide while moving, they will merge into a tile with the total value of the two tiles that collided. The resulting tile cannot merge with another tile again in the same move. 
2. A scoreboard on the upper-right keeps track of the user's score. The user's score starts at zero, and is incremented whenever two tiles combine, by the value of the new tile. As with many arcade games, the user's best score is shown alongside the current score. Use your arrow keys to move the tiles. 
3. The game is won when a tile with a value of 2048 appears on the board, hence the name of the game.
4. When the player has no legal moves (there are no empty spaces and no adjacent tiles with the same value), the game ends

## HTML Pseudo Code
1. On the top of the page, there is a header section. Within the header section is the name of the game, "2048", centered at the top
2. Below the header, there is a 'nav' section. The nav section will have a link to "Start New Game". Possible additions to the nav may be settings if possible 
3. Below the nav is Main section. This section houses the main 'grid' for the game. The grid is a 4x4 grid with 16 'squares' within the grid each being aprox 2.5em each. Each of the 16 squares will have a "square" class to allow for dom manipulation. 
4. Below the main section, there is a scoring area. The user score will be kept along with a "best" score for the user during their session. 
5. At the bottom of the page is a footer containing © information and socialmedia links

## JAVASCIPT Pseudo Code
1. Set up an event handler to the "Start New Game" button to begin new game. At rest until new game is started
2. Set up and initialize the game. Score equals 0, all squares have no value
3. Randomize 2 digits to get either 0 or 1. If 0, the newNumber is 2. If 1, then newNumber is 4
4. Create a ForLoop to go through the 16 grid squares to determine which of the squares do not have a value in them (at the beginning of the game, that is 16). 
GRID LAYOUT
 0  1  2  3
 4  5  6  7
 8  9 10 11
12 13 14 15


5. Push the available squares to an array called "available"
6. Randomize the number of items in the 'available' array to determine which of the empty squares we will place the randomized newNumber from earlier
7. Add the newNumber value to the value of teh square and the html elements
8. At the start of the game, redo steps 3-6 to add another newNumber to the grid so that there are 2 digits on the board
9. Add 4 Keypress Events to 'up', 'down','left' or 'right arrow keys. Game is at rest until a new key is pressed
10. When one of the 4 kepress events for direction are pressed call direction function (pushLeft, pushRight, pushUp, pushDown)
11. If pushLeft is called, then run a ForLoop through the 12 available squares that can be moved to the left beginning with the 1 square (leftPush will be 1,5,9,13,2,6,10,14,3,7,11,15)
12. Check to see if square can be moved to the left. Item will be prevented from moving to the left if there is already a number in the square to the left (square - 1) or if the square is in the last leftNumber of the squaregrid (0,4,8,12)
13. If the number can be moved to the left, check to see if it can be moved to the left again (square-2) and again (square-3) and move if applicable
14. Once square is moved, review to see if there is a number in the square to the left
15. If there is a number in the sqaure to the left, then compare to see if the num is the same. 
16. If number is the same, then combine the numbers and add the totals together
17. check to see if the number is 2048 is what was created and if so, declare win




