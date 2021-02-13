

//GLOBAL AND LOCAL VARIABLES//

//GLOBAL VARIABLE//
var x = 10;
function addNumbers1() {
    document.write(20 + x + "<br>");
}
function addNumbers2() {
    document.write(x + 100);
}
addNumbers1();
addNumbers2();

//LOCAL VARIABLE//
function addNumbers4() {
    var b= 10;
    console.log(15 + b);
}
function addNumbers5() {
    var c= 10;
    console.log(c + 100);  //error because b is defined locally in the function above, so it has no variable to reference. When redined as a new variable c it works.//
}
addNumbers4();
addNumbers5();

//IF STATEMENTS//
if (1<2) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("greeting").innerHTML= "How are you today?"
    }
}

//ASSIGNMENT: write your own if statement//
function driving() {
    var age = 20
    if (age>17) {
    document.getElementById("drive").innerHTML= "you can drive!";
    }
}

//IF ELSE STATEMENTS//
function ageDrive() {
    age = document.getElementById("driving1").value;
    if (age>=16) {
        drive= "You are old enough to drive!";
        }
    else {
        drive= "You are not old enough to drive.";
    }
    document.getElementById("How_old_are_you?").innerHTML = drive;
    }

//ELSE IF STATEMENTS--follows if statements and executed if the if statement is false//
function Time_function() {
    var Time= new Date().getHours();     //utilizing new command; get Date and get Hours methods//
    var Reply;
    if (Time < 12 == Time > 0) {       //denotes morning time equal to before 12 and greater than 0//
        Reply= "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {    //denotes afternoon if current time is in between 1200 and 1800// 
        Reply= "It is afternoon.";
    }
    else {
    Reply= "It is evening time.";    //two other conditions have been met. The only other time frame is evening 1800 to 0//
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}


