



//Conditional operator--assigns a value to a variable base on condition//
document.write(Bigger= (5>1)? "Left number is bigger":"Right numer is bigger");

//more elaborate actions in HTML with ternary operators//
function rideFunction (){
    var height, can_ride;  //two variables//
    height= document.getElementById("height").value;
    can_ride=(height<52)? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

//CHALLENGE: user older enough to vote//
function voteFunction (){
    var age, can_vote;  
    age= document.getElementById("age").value;
    can_vote=(age<18)? "You are not old enough to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

//KEYWORDS AND CONSTRUCTORS//
//keywords identify actions to be performed like var to assign variable or new to create new objects//
//this keyword indicates the object is the owner of the code. when used within the object this is the object. when used with a function, the value of this is the object that possesses the function//
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawl", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("New_and_This").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//ASSIGNMENT: assign a variable a reserved word (can't be used as a variable, label or function because already mean something else); use object constructor//
//example of a working constructor//
function muppet(name, animal, movie, year){
    this.name= name;
    this.animal= animal;
    this.movie= movie;
    this.year= year;
}
    var Kermit= new muppet("Kermit", "frog", "The Muppet Movie", 1979);
    var Piggy= new muppet("Ms.Piggy", "pig", "Muppet Treasure Island", 1996);
    var Foz= new muppet("Fozzy", "bear", "The Muppets Take Manhatten", 1984);
       function muppetMov() { 
        document.getElementById("newandthis").innerHTML= Foz.name  + " is a " + Foz.animal + " who starred in " + Foz.movie +", " + Foz.year + ".";
}

//example of a constructor with a reserved variable//
//I changed a variable to the word "return" and it would not work//
function muppet2(name2, animal2, movie2, year2){
    this.name2= name2;
    this.animal2= animal2;
    this.movie2= movie2;
    this.year2= year2;
}
    var Kermit2= new muppet2("Kermit", "frog", "The Muppet Movie", 1979);
    var Piggy2= new muppet2("Ms.Piggy", "pig", "Muppet Treasure Island", 1996);
    var Foz2= new muppet2("Fozzy", "bear", "The Muppets Take Manhatten", 1984);
       function muppetMov2() { 
        document.getElementById("newandthis2").innerHTML= Piggy2.name2  + " is a " + Piggy2.animal2 + " who starred in " + Piggy2.movie2 +", " + Piggy2.year2 + ".";
}

//Nested Functions//
//OUT PUT is 10 because plus_one nested within main function starting from 9//
function countFunction(){
    document.getElementById("counting").innerHTML= count();
    function count() {
        var startingpoint= 9;
        function plus_one() {startingpoint += 1;}
        plus_one();
        return startingpoint;
        }
    }