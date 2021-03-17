
/*
        4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
        5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one
        letter from the end of the string and attaching it to the front.
        10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user)
        31. Write a JavaScript program to find the largest of three given integers. */


function TriangelArea(a, b, c) {
    
    var p = (a + b + c) / 2;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("result1").innerHTML ='Sides: '+a+', '+b+', '+c+'<p>Area: '+s;
}
function ReverseString(str) {
    var stringArray = str.split('');
    var newString = '';
    for (var i = stringArray.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.getElementById("result2").innerHTML = '<hr>String: ' + str + '<p>Reverse: ' + newString;
}

function Calculation() {
    var a = Number(document.getElementById('First').value);
    var b = Number(document.getElementById('Second').value);
    var multi = a * b;
    var divi = a / b;
    document.getElementById("result3").innerHTML =a+'*'+b+'='+multi +'<p>' + a + '/'+b+'=' +divi+'<hr\>';
}

function LargestInt() {
    var a = Number(document.getElementById('One').value);
    var b = Number(document.getElementById('Two').value);
    var c = Number(document.getElementById('Three').value);
    var largest = (a > b) ? a : b;
    largest = (largest > c) ? largest : c;

    document.getElementById("result4").innerHTML = 'Numbers: ' + a + ', ' + b + ', ' + c + '<p>The largest: ' + largest + '<hr\>';
}

