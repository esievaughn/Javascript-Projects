



//CONCAT() METHOD--connects two or more strings//
function fullSentence() {
    var part1= "I have ";
    var part2= "made this ";
    var part3= "into a complete ";
    var part4= "sentence.";
    var wholesentence= part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML= wholesentence;
}

//SLICE() METHOD--extract a string section and returns to a new string//
function sliceMethod() {
    var sentence= "All work and no play makes Johnny a dull boy.";
    var section= sentence.slice(27,33);    //numbers indicate which characters will be cut out and displayed//
    document.getElementById("slice").innerHTML= section;
}

//REPLACE() METHOD//
function repMethod() {
    var str= "Kermit, Piggy, Gonzo, Fozzy, Animal";
    var rep= str.replace("Piggy", "Ms. Piggy");
    document.getElementById("repstr").innerHTML= rep;
}

//CHALLENGE--research and execute uppercase() and search () methods//
//UPPERCASE() METHOD--converts string to upper case//
function upMethod() {
    var str= "Kermit, Piggy, Gonzo, Fozzy, Animal";
    var up= str.toUpperCase();
    document.getElementById("uppercase").innerHTML= up;
}

//SEARCH() METHOD--searches string for specified value and returns the matching position//
function searchMethod() {
    var str= "Kermit, Piggy, Gonzo, Fozzy, Animal";
    var sear= str.search("Fozzy");
    document.getElementById("searching").innerHTML= sear;
}

    //NUMBER METHODS//
//TOSTRING() METHOD--returns a number as a string//
function tostrMethod() {
    var X= 182;
    document.getElementById("numbers-to-string").innerHTML= X.toString();
}

//TOPRECISION() METHOD--formats a number to a specified length//
function precMethod() {
    var X= 1298.2020293492983828390208;
    document.getElementById("precision").innerHTML= X.toPrecision(6);
}

//CHALLENGE: research and execute toFixed() and valueOf() methods//
//TOFIXED() METHOD--converts a number into a string and rounds to specified number of decimals//
function fixedMethod() {
    var X= 1298.2020293492983828390208;
    var Y= X.toFixed(4)
    document.getElementById("fixing").innerHTML= Y;
}

//VALUEOF() METHOD--returns a primitive value of a string//
function valueMethod() {
    var str= "The Tech Academy! "
    var res= str.valueOf();
    document.getElementById("valueof").innerHTML= res;
}
