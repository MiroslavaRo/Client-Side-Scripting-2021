﻿
function Calculator() {
    let itemList = document.getElementById("mySelect");
    let outputBox = document.getElementById("result");

    let a = Number(document.getElementById("One").value);
    let b = Number(document.getElementById("Two").value);
    let collection = itemList.selectedOptions;
    let output = "";

    for (let i = 0; i < collection.length; i++) {
        if (output === "") {
            output = "<br/>Your expression: ";
        }
        let calculation = eval(a + collection[i].label + b);
        output = output + a + " " + collection[i].label + " " + b + ' = ' + calculation + ' <hr>';
    }

    document.getElementById("result").innerHTML = output;
}


