/* 1. Write a JavaScript function that reverse a number.
4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
17. Write a JavaScript function to  get the number of occurrences of each letter in specified string.
23. Write a JavaScript function to find the first not repeated character.
*/



function ReverseNumber() {
    var num = document.getElementById('number').value;
    var numberToArray = num.split('');
    var newNumber='';
    for (var i = numberToArray.length - 1; i >= 0; i--) {
        newNumber += numberToArray[i];
    }
    newNumber = newNumber.toString();
    document.getElementById("result1").innerHTML = '<hr>Number: ' + num + '<p>Reverse: ' + newNumber;
}

function StringsAlphabetical() {
    //26 letters
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var str = document.getElementById('str').value.toLowerCase().split('');
    var strAlphabetical = [str.length];

    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < letters.length; i++) {
            if (str[j] == letters[i]) {
                strAlphabetical[j] = i;
            }
        }
        console.log(strAlphabetical[j]);
    }
    strAlphabetical.sort(function (a, b) {
        return a - b;
    });
    console.log(strAlphabetical);
    for (var j = 0; j < strAlphabetical.length; j++) {
        for (var i = 0; i < letters.length; i++) {
            if (strAlphabetical[j] == i) {
                strAlphabetical[j] = letters[i];
            }
        }
    }
    strAlphabetical = strAlphabetical.join('');
    document.getElementById("result2").innerHTML = 'String Alphabeticaly: ' + strAlphabetical;
}


function NotRepeatedChar() {
    var arra1 = document.getElementById('str2').value.toLowerCase().split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    document.getElementById("result3").innerHTML = 'The first not repeated character: ' + result;
}