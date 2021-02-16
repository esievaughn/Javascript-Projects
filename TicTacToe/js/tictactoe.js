


let activePlayer= 'X'; //variable keeps track of whose turn it is//
let selectedSquares= []; //array stores an array of moves. we use this to determine conditions//

function placeXOrO(squareNumber) {  //function for placing an x or o in the square//
    //this condition ensures a square hasn't been selected already.
    //the .some() methods is used to check each element of the selectedSquare array
    //to see if it contains the square number clicked on//
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
    //this variable retrieves the html id that was clicked.//
        let select= document.getElementById(squareNumber);
     //condition checks to see whose turn it is//
        if (activePlayer === 'X') {
        //if activePlayer is equal to 'X', the x.png is placed in HTML//
        select.style.backgroundImage= 'url("images/fly.png")';
        //activePlayer may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else { 
        //if activePlayer is equal to 'O', the o.png is places in HTML//
        select.style.backgroundImage= 'url("images/swatter.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array//
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions//
        checkWinConditions();
        //condition for changing the active player//
        if (activePlayer === 'X') {
            //if activePlayer is 'X' change it to 'O'//
            activePlayer= 'O';
            //if activePlayer is anything other than 'X'//
        } else {
            //change activePlayer to 'X'//
            activePlayer= 'X';
        }
        
        //this functino plays placement sound//
        audio('./media/buzz.mp3');
        //this condition checks to see if is computer's turn//
        if(activePlayer === 'O'){
            //this function disables clicking for computer choice//
            disableClick();
            //this function waits 1 second before placing the image and enabling click//
            setTimeout(function(){computersTurn();},1000);
        }   //returning true is needed for our computersTurn() function to work
            return true;
    }

        //this function results in a random square being selected//
        function computersTurn() {
            //this boolean is needed for our while loop//
            let success= false;
            //this variable stores a random number 0-8//
            let pickASquare;
            //this condition allows our while loop to keep trying if a square is selected already//
            while(!success) {
                //a random number between 0-8 is selected//
                pickASquare= String(Math.floor(Math.random() * 9));
                //if the random number evaluated returns true, the square hasn't been selected yet.
                if(placeXOrO(pickASquare)) {
                    //this line calls the function//
                    placeXOrO(pickASquare);
                    //this changes our boolean and ends the loop//
                    success = true;
                };
            }
        }
    }

//this function parses the selectedSquares array to search for win conditions.//
//drawWinLine function is called to draw line if condition is met.//
function checkWinConditions() {
    if (arrayIncludes('OX', '1X', '2X')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520);}
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520);}
    //this condition checks for a tie. if none of the above conditions register and 9 squares are selected, the code executes//
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound//
        audio('./media/flyswat.mp3');
        //this function sets a .3 second timer before the resetGame is called//
        setTimeout(function () {resetGame();}, 1000);
    }
    
    //this function checks if an array includes 3 strings. It is used to check for each win condition//
    function arrayIncludes(squareA, squareB, squareC) {
        //the next three variables will be used to check for three in a row//
        const a= selectedSquares.includes(squareA);
        const b= selectedSquares.includes(squareB);
        const c= selectedSquares.includes(squareC);
        //if the three variabls we pass re all included in our array, true is returned and our else if condition executes drawWinLine function//
        if (a === true && b === true && c === true) {return true;}
    }
}

//this function makes our body element temporarily unclickable//
function disableClick() {
    //this makes our body unclickable//
    body.style.pointerEvents= 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents= 'auto';},1000);
}

//this function takes a string parameter of the path you set earlier for placement sound place.mp3//
function audio(audioURL) {
    //create a new audio object and pass the path as a parameter//
    let audio= new Audio(audioURL);
    audio.play();
}

//function utilizes html canvas to draw win lines//
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line access our html canvas element//
    const canvas= document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas//
    const c= canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is//
    let x1= coordX1,
    //this line indicates where the start of a lines y axis is//
    y1= coordY1,
    //this line indicates where the end of a lines x axis is//
    x2= coordX2,
    //this line indicaates where the end of a y axis  is//
    y2= coordY2,
    //this variable stores temp x axis data we update in our animation loop//
    x= x1,
    //this variable stores temp y axis data we update in our animation loop//
    y= y1;

    //this function interacts with the canvas//
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restarts//
        const animationLoop= requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608); //method clears content from the last loop//
        c.beginPath(); //the method starts a new path//
        c.moveTo(x1,y1); //method moves us to a starting point for our line//
        c.lineTo(x,y); //method indictes the end point in our line//
        c.lineWidth= 10; 
        c.strokeStyle= 'rgba(70,255,33,0.8)'; //sets color of our line//
        c.stroke(); //method draws everything laid out above//
        if (x1 <= x2 && y1 <= y2) {  //condition checks to see if we've reached the endpoint//
            if (x < x2) {x += 10;}   //condition adds 10 to the previous x point//
            if (y < y2) {y += 10;}   //condition adds 10 to the previous end y point//
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        //this condition is similar to the one above. It was necessary for 6, 4, ,2 win conditions//
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
        //this function clears our vanvas after our win line is drawn//
        function clear() {
            const animationLoop= requestAnimationFrame(clear); //this line starts our animation loop/
            c.clearRect(0,0,608,608); //clears our canvas//
            cancelAnimationFrame(animationLoop); //stops our animation loop//
        }
        disableClick(); //this line disallows clicking while the win sound is playing//
        audio('./media/splash.mp3'); //this line plays the win sounds//
        animateLineDrawing(); //calls our main animation loop//
        setTimeout(function() {clear(); resetGame(); },1000); //line waits 1 seconds. then clears canvas, resets game, and allows clicking again//
}


        //function resets the game in a tie or win//
        function resetGame() {
            for (let i = 0; i < 9; i++) {   //loop iterates through each HTML square element//
                let square= document.getElementById(String(i)); //variable gets the HTML element of i//
                square.style.backgroundImage= ''; //removes our elements backgroundImage//
            }
            selectedSquares= []; //this resets our array so it is empty and we can start over//
        }