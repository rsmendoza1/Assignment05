/*eslint-env browser*/

/*function init() {
    "use strict";
    var button = window.document.getElementById("one");
    button.addEventListener("click", function () {
        window.document.getElementById('result').value =
            window.document.getElementById('one').value;
    });
}*/

//ADD EVENT LISTENER
window.addEventListener('load', function () {
    "use strict";
    var $ = function (id) {//$ IS ANONYMOUS FUNCTION, RETURNS DOM
        return document.getElementById(id);
    };

//FUNCTION, ENTER
    function enter(val) {//ACCEPTS VALUE AS AN ARGUMENT
        $('result').value += val;//$ IS ANONYMOUS FUNCTION, RETURNS DOM
    }

//FUNCTION, CALCULATE
    function calculate() {//DO NOT PASS/ACCPETS ANY ARGUMENTS
        $('result').value = eval($('result').value);//GET BY ID, EQUAL TO IT'S VALUE
    }

//FUNCTION, CLEAR
    function clear() {
        $('result').value = '';//BLANK ' ' CLEARS OUT THE SCREEN
    }

//CREATE A USER DEFINE FUNCTION, INIT
    function init() {
        var val;
//ADD BUTTON EVENT LISTENERS 
        $('button').addEventListener('click', function (e) { //(e)= EVENT
            enter(e.target.value);
        });
        
        $('equal').addEventListener('click', function () {
            calculate();
        });
        
        $('clear').addEventListener('click', function () {
            clear();
        });
        
    }
    init();//DISPLAYS RESULT
});