/*eslint-env browser*/

window.addEventListener('load', function () {
    "use strict";
    var $ = function (id) {
        return document.getElementById(id);
    };

    function currentEmployees() {
        var employees = []; //ARRAY
        var employee1 = ['Jack', 'CEO', '0235'];
        var employee2 = ['Jill', 'Marketing', '0749'];
        var employee3 = ['Luis', 'Finance', '0538'];
        var employee4 = ['Katie', 'Development', '0384'];
        var employee5 = ['Danny', 'Admin', '0150'];
        //ARRAY PUSH adds one or more elements to the end of an array and returns the new length of the array.
        employees.push(employee1, employee2, employee3, employee4, employee5);
        return employees;
        //COMBINE WITH PREVIOUS VAR STATEMENT, TOO MANY VARS?
    }

    function makeTable(employee) {
        var table = $('table');
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = employee[0];
        cell2.innerHTML = employee[1];
        cell3.innerHTML = employee[2];
        cell4.innerHTML = "<button class='deleteBtn'>Delete</button>";
    }

    function validate(name, title, extension) { //BOOREAN T/F ONLY
        if (!Boolean(name) || !Boolean(title) || !Boolean(extension)) {
            if (name === '') {
                $('name-error').innerHTML = "Enter Value";
            } else {
                $('name-error').innerHTML = "";
            }
            if (title === '') {
                $('title-error').innerHTML = "Enter Value";
            } else {
                $('title-error').innerHTML = "";
            }

            if (extension === '') {
                $('extension-error').innerHTML = "Enter Value";
            } else {
                $('extension-error').innerHTML = "";
            }

            return false;
        }

        return true;
    }

    function add(employees) {
        var tempEmployee = [];
        var name = $('name').value;
        var title = $('title').value;
        var extension = $('extension').value;

        if (!validate(name, title, extension)) {
            return;
        }

        if (name !== '') {
            $('name-error').innerHTML = '';
            tempEmployee[0] = name;
            $('name').value = '';
        }

        if (title !== '') {
            $('title-error').innerHTML = '';
            tempEmployee[1] = title;
            $('title').value = '';
        }

        if (extension !== '') {
            $('extension-error').innerHTML = '';
            tempEmployee[2] = extension;
            $('extension').value = '';
            makeTable(tempEmployee);
        }

        employees.push(tempEmployee);
    }

    function init() {
        var employees = currentEmployees();
        var deleteBtn = document.getElementsByClassName('deleteBtn');

        employees.forEach(function (employee) {
            makeTable(employee);
        });

        $('enter').addEventListener('click', function () {
            add(employees);
            $('num-employees').innerHTML = employees.length;
        });
        
        for (var i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', function () {
                $('table').deleteRow(i);
            })
        }
        
        $('num-employees').innerHTML = employees.length;

    }

    init();
});
