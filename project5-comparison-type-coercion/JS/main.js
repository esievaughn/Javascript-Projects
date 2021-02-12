
//"TYPEOF" is an operator that returns data type of operand//

//TYPEOF--OUTPUT "STRING"//
  document.write(typeof "bloom");

//TYPEOF--OUTPUT "NUMBER"//
document.write(typeof 10); //no quotations around number value//

//TYPEOF--OUTPUT "BOOLEAN"//
document.write(typeof true);


//RESULT IS NaN BECAUSE YOU CAN'T DIVIDE 0 by 0//
function myFunction() {
  document.getElementById("Test1").innerHTML= 0/0;
}

//TRUE OUTPUT because a string is Not a Number//
function myFunction2() {
document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

//FALSE OUTPUT because '007' is a number//
function myFunction3() {
document.getElementById("Test3").innerHTML = isNaN('007');
}

//INFINITY//
document.write(2E310);

function infin(){
  2E310;
  document.getElementById("infinity").innerHTML = 2E310;
}

//-INFINITY//
function neginfin() {
  -3E310
  document.getElementById("neginfinity").innerHTML = -3E310;
}

//BOOLEAN LOGIC//
document.write(10>2);

document.write(10<2)

function bool1() {
  10>2;
  document.getElementById("boolean1").innerHTML = 10>2;
}

function bool2() {
  10<2
  document.getElementById("boolean2").innerHTML = 10<2;
}

//CONSOLE LOG METHOD//
console.log(2+2); //output 4 in the console//

//TYPE COERCION-- when operands are different data types like, string and a number//
document.write("10" + 5) //"10" is string, 5 is number, output is 105//

//CHALLENGE: Display "false" in console using boolean logic//
console.log(12>10);

//DOUBLE EQUAL SIGNS--comparison with true or false output//
console.log(10 == 10);
console.log(10==4);

//TRIPLE EQUAL SIGNS--tripe equal comparison that data is equal to or not, and same data type//
function tripeq(){    //example of true//
  x=10;
  y=10;
  document.getElementById("tripleequal").innerHTML = x===y;
}

function tripeq2(){
  x=82;             //example of false because two different data types--one string and one number//
  y="82";
  document.getElementById("tripleequal2").innerHTML = x===y;
}

function tripeq3(){
  x=5;             //example of false because two different data types--one string and one number//
  y="hello";
  document.getElementById("tripleequal3").innerHTML = x===y;
}

function tripeq4(){
  x=52;             //example of false because two different data types--one string and one number//
  y=10;
  document.getElementById("tripleequal4").innerHTML = x===y;
}

//BOOLEAN LOGIC OPERATORS: &&, ||//
  //&& - "and" operator logic between values or variables--output true or false//
console.log(5>2 && 10>4);
console.log(5>10 && 10>4);

//|| is "or" operator//
console.log(5>2 || 10>4); //output true//
console.log(5>10 || 10>20); //output false//

//NOT OPERATOR--"!" checks whether or not something is true or not//
function notFunction() {
  document.getElementById("Not").innerHTML = !(20>10);
}

function notFunction2() {
  document.getElementById("Not2").innerHTML = !(5>10); //double negative returns true//
}



