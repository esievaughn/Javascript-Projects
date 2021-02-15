
//COUNTING LOOP//
function countToTen() {
    var digit= "";
    var x= 1;
    while (x<11) {
        digit += "<br>" + x;  //<br> tag causes spacing between lines//
        x++   //adding one to x//
    }
    document.getElementById("countingtoten").innerHTML= digit;  
}

//WRITE YOUR OWN LOOP//
function Looping() {
    var text= "";
    var x= 0;
    while (x<10) {
        text += "<br>The number is " + x;
        x++;
    }
    document.getElementById("loop").innerHTML= text;
}

//STRING LENGTH PROPERTY--returns length of string in numbers//
function strLngth() {
    var str= "Universal Sound";
    var n= str.length;
    document.getElementById("stringlength").innerHTML= n;
}


//FOR LOOPS--repeatedly execute instructions as long as set condition is true//
var instruments= ["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];  //array = instrument names//
var content= "";
function forLoop() {
    for (y=0; y<instruments.length; y++) {   //starts with index 0, moves through instrument lengths adding 1 index each time//
        content += instruments[y] + "<br>";
    }
    document.getElementById("listofinstruments").innerHTML= content;
}

//ARRAY//
function catPics() {
    var catPicture= [];
    catPicture[0]= "sleeping";   //assigning each element in the array an index to be pulled//
    catPicture[1]= "playing";
    catPicture[2]= "eating";
    catPicture[3]= "purring";
    document.getElementById("cat").innerHTML= "In this picture, the cat is " + catPicture[2] + ".";
}

//CONST KEYWORD-- constant whose scope can be either global or local. Const--not a constant because the value assigned by const can change, but var identifier cannot be reassigned//
function constFunction() {
    const musicalInstrument= {type:"guitar", brand:"Fender", color:"black"};
    musicalInstrument.color= "blue";                                        //can change the value assigned to type: changed blue, added price, but cannot change the identifier "musicalInstrument" or "type"//
    musicalInstrument.price= "$900";
    document.getElementById("constant").innerHTML= "The cost of the " + musicalInstrument.color +" "+ musicalInstrument.type + " was " + musicalInstrument.price;
}

//LET KEYWORD//
function letting() {
    var x= 55;
    {
        let x= 76;                      //x output should be 55 because "let x=75" defines locally only//
    }
    document.getElementById("55").innerHTML= x;
}

//RETURN STATEMENT--stops the execution of a function and returns a value from that function//
function returningFun() {
    return Math.PI;
}
    document.getElementById("returning").innerHTML= returningFun();

//METHOD using return and this keywords//
let car= {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("carObject").innerHTML= car.description();

//BREAK STATMENT--when used in a loop, breaks the loop and continues executing code after the loop//
//FOR LOOP WITH A BREAK//
function breakFun() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      if (i === 3) {                //if i equal to 3 then break the loop//
        break;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
  }

//CONTINUE STATEMENT--skips over an iteration of a loop for a specified condition//
//break jumps out of loop under specified condition, continue jumps out for specified and continues with the rest of the loop//
function continueFun() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      if (i === 3) {                //if i equal to 3 then break the loop//
        continue;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
  }

