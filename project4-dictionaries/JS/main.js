

//DICTIONARIES//
function myDictionary() {
    var Muppets= {
    Species:"Frog",
    Color:"Green",
    Age: 60,             //5 is value type and does not quotations//
    Sound:"the rainbow connection"
    };
    document.getElementById("Dictionary").innerHTML = Muppets.Sound;
}

//DELETE EXAMPLE--output returns "undefined"//
function delDictionary() {
    var Muppets= {
    Species:"Frog",
    Color:"Green",
    Age: 60,             //5 is value type and does not quotations//
    Sound:"the rainbow connection"
    };
    delete Muppets.Sound;
    document.getElementById("deleteDictionary").innerHTML = Muppets.Sound;
}


