

//Addition//
function additionFunction() {
    var addition= 100 + 550;
    document.getElementById("Math").innerHTML = "100 + 550 = " + addition;
}

//Subtraction//
function subFun() {
var subtraction= 5 - 7;
document.getElementById("sub").innerHTML = " 5 - 7 = " + subtraction;
}

//MULTIPLICATION//

function multiply(){
    var basicm= 250 * 111;
    document.getElementById("multFun").innerHTML = "250 * 111 = " + basicm;
}

//MULTIPLICATION//
function divide(){
    var basicdiv= 73 / 7;
    document.getElementById("divFun").innerHTML = "73 / 7 = " + basicdiv;
}

//COMBINBING MATH VARIABLE//
function variedMath(){
    var simpleMath= (20 + 30) * 10 / 2 -5;
    document.getElementById("variety").innerHTML= + simpleMath;
}

//MODULUS-REMAINDER//
function modulusOperator(){
    var simMAth= 30 % 9;
    document.getElementById("remainder").innerHTML= + simMAth;
}

//NEGATION OPERATOR//
function negOperator(){
    var A= 30;
    document.getElementById("negative").innerHTML= -A;
}

//INCREMENT AND DECREMENT//
var B= 10;
B++;
document.write(B);

var C= 5;
C--;
document.write(C);

//RANDCOM NUMBER between 0 and 1//
window.alert(Math.random());

//RANDDOM NUMBER ___ and ____ *could be between 0 and 100//
window.alert(Math.random() * 100);

//MATH OBJECTS AND MATH METHODS--math constants and functions that remain static //

function pie(){
    Math.PI;
    document.getElementById("yumpie").innerHTML = + Math.PI;
}

function mthMthd() {
    Math.E;
    document.getElementById("oiler").innerHTML = + Math.E;
    }

function mthRoot() {
    Math.sqrt()
    document.getElementById("squareroot").innerHTML = + Math.sqrt(64);
}