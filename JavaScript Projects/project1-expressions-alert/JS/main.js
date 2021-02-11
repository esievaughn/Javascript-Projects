
window.alert("Hello, world!");      //window Alert example//

document.write("Hello, world!");    //document write example//


var A="This is a string.";          //defining a string to a variable//
document.write(A);

var B="Mi Tierra Mexico"        //defining a string to a variable//
document.write(B);

window.alert(B);                //utilizing a window alert with assinged str variable//

document.write("\"Kermit the Frog said, \"It's not easy being green.\""); //example of escaping//

document.write("\"Here\'s some advice:" + "Always be yourself." + "Never take yourself too seriously." //example of escaping and adding strings together"
+ "And beware of advice from experts, pigs and members of Parliment.\"" + "-Kermit the Frog");

var C="\"Here\'s some advice:" + "Always be yourself." + "Never take yourself too seriously."          //concatenating, escaping, assigning string to variable //
+ "And beware of advice from experts, pigs and members of Parliment.\"" + "-Kermit the Frog";

var D= (A+C)                                                                                          //two string variable added together to form a new variable//
document.write(D) 

var muppetmovie= "The Muppets", Frog= "Kermit", Pig= "Ms.Piggy", Bear= "Fozzy", monster="Animal", bird="Gonzo"   //assigning multiple variable//
document.write(Pig)

var green="Sometimes it sucks being green."    //Assigning a str and changing the str color with .fontcolor method//
var green= green.fontcolor("green");
document.write(green);

document.write(10/2);

function My_First_Function() {              //Defining a function and naming it//
    var str= "This is blue text!";          //Defining a variable and giving it a string value//
    var result= str.fontcolor("blue");     //Using the fontcolor method on a string variable//
    document.getElementById("Blue_Text").innerHTML = result; //putting the value of result into the HTML doc with "Blue_Text" id//
}

