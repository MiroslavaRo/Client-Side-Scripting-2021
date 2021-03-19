/*
 * 3. Write a JavaScript function to split a string and convert it into an array of words.
5. Write a JavaScript function to convert a string in abbreviated form.
9. Write a JavaScript function to capitalize the first letter of each word in a string.
13. Write a JavaScript function to concatenates a given string n times (default is 1)
*/
function Abrivation(str) {
    console.log('String: ' + str);
    var arrayOfWords = str.split(' ');
    console.log(arrayOfWords);
    var abrivatedWords = "";
    for (var i = 1; i < arrayOfWords.length; i++) {
        var word = arrayOfWords[i].split('');
        abrivatedWords = arrayOfWords[0] + ' ' + word[0] + '.';
    }

    console.log(abrivatedWords);
}


function StringToWords(str1) {
    console.log('String: ' + str1);
    var punctuation = [',', '.', '!', '?'];
    for (var p = 0; p < punctuation.length; p++) {
        str1 = str1.replace(punctuation[p], '');
    }
    var array = str1.split(' ');
    console.log(array);
}



function firstLetterCapital(str2) {
    console.log('String: ' + str2);
    var punctuation = [',', '.', '!', '?'];
    for (var p = 0; p < punctuation.length; p++) {
        str2 = str2.replace(punctuation[p], '');
    }
    var arrayOfWords = str2.split(' ');
    var arrayOfNewWords = [];
    for (var i = 0; i < arrayOfWords.length; i++) {
        var word = arrayOfWords[i].split('');
        word[0] = word[0].toUpperCase();
        arrayOfNewWords[i] = word.join('');
    }

    console.log(arrayOfNewWords);

}


function CopyString() {
    var number = Number(document.getElementById('n').value);
    var str = document.getElementById('str').value;
    document.getElementById("result4").innerHTML = str.repeat(number);
}