/*
 * 4. Write a JavaScript function to generate a random integer.
6. Write a JavaScript function to find the highest value in an array.
19. Create a Pythagorean function in JavaScript.
21. Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript.
*/

function RandomInt() {
    var random = Math.floor(Math.random()*1000);
    console.log('Random number: '+random);
}

function HighestValue() {
    var array = document.getElementById('arr').value.split(',');
    var arrayHalfResult = 'Array: ' + array;
    array.sort(function (a, b) {
        return b - a;
    });
    var highest = array[0];
    console.log(arrayHalfResult+ " The highest value: " + highest);
}

function Pythagorean() {
    var a = document.getElementById('pyt1').value;
    var b = document.getElementById('pyt2').value;
    var a2 = a * a;
    var b2 = b * b;
    var c = Math.sqrt(a2 + b2);
    console.log('Pythagorean: '+c);
}

function RomanNumeral() {
    var num = document.getElementById('num').value;
    var num2 = num;
    var romanNumber = '';
    for (var i = 0; i < num; i++) {
        if (num >= 1 && num < 5) {
            if (num == 5-1) {
                num = num - (5-1);
                romanNumber += 'IV';
            }
            else {
                num = num - 1;
                romanNumber += 'I';
            }
        }
        if (num >= 5 && num < 10) {
            if (num==10-1) {
                num = num - (10-1);
                romanNumber += 'IX';
            }
                else {

                num = num - 5;
                romanNumber += 'V';
            }
        }
        if (num >= 10 && num < 50) {
            if (num == 50-10) {
                num = num - (50-10);
                romanNumber += 'XL';
            }
            else {
                num = num - 10;
                romanNumber += 'X';
            }
        }
        if (num >= 50 && num < 100) {
            if (num == 100 - 10) {
                num = num - (100 - 10);
                romanNumber += 'XC';
            }
            else {
                num = num - 50;
                romanNumber += 'L';
            }
        }
        if (num >= 100 && num < 500) {
            if (num == 500 - 100) {
                num = num - (500 - 100);
                romanNumber += 'CD';
            }
            else {
                num = num - 100;
                romanNumber += 'C';
            }
        }
        if (num >= 500 && num < 1000) {
            if (num == 1000 - 100) {
                num = num - (1000 - 100);
                romanNumber += 'CM';
            }
            else {
                num = num - 500;
                romanNumber += 'D';
            }
        }
        if (num >= 1000) {
            num = num - 1000;
            romanNumber += 'M';
        }
    }
    console.log('Number: ' + num2+' Roman Number: '+romanNumber);
}