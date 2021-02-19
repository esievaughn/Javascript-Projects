

function get_todos() {                          //function gets the task from input
    var todos= new Array;                       //creates an array of task that are inputed
    var todos_str= localStorage.getItem('todo'); //pulls the task that was saved in the web browser memory
    if (todos_str !== null) {                   //if input is not null then JSON.parse will communicate with the web browser to make the task a JAvaScript object
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {                                        //function adds the inputed task to the get_todos function array
    var task= document.getElementById("task").value;    //takes the inputed task and creates a variable of it
    var todos= get_todos();
    todos.push(task);                                   //adds a new task the end of the array
    localStorage.setItem('todo', JSON.stringify(todos)); //converts the task input to a JSON string
    document.getElementById("task").value= "";
    show();

    return false;
}

function show() {                                       //functino keeps the tasks permanetly displayed on the screen
    var todos= get_todos();                          //sets the task that was retrieved as a variable
    var html= '<ul>';                           //sets up each task as an unordered list
    for (var i = 0; i < todos.length; i++) {      //displays a task to the list in the order that it is inputed
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';  //displays the task as a list and creates the button with the "x" 
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML= html; //displays the task as a list


var buttons= document.getElementsByClassName('remove');   //function remove items from todo array
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
    };
}


function remove() {                         //function to remove array from todo 
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    // examine show() to remove task from screen
    show();
    return false;
}


document.getElementById('add').addEventListener('click', add); //displays the inputed task when the 'Add Item' buttonis clicked
show();                                                        //keep the inputs displayed permanetly on the screen