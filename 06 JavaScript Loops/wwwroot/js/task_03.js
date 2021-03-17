/*
 * 1. Write a JavaScript program that accept two integers and display the larger.
4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
*/


function LargerInt() {
    var a = Number(document.getElementById('One').value);
    var b = Number(document.getElementById('Two').value);
    var largest = (a > b) ? a : b;

    document.getElementById("result1").innerHTML = 'Numbers: ' + a + ', ' + b + '<p>The largest: ' + largest + '<hr\>';
}
function LagestFromFive() {
    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var n3 = Number(document.getElementById('n3').value);
    var n4 = Number(document.getElementById('n4').value);
    var n5 = Number(document.getElementById('n5').value);

    var nums = [n1, n2, n3, n4, n5];
    nums.sort(function (a, b) {
        return b-a;
    });
    var largest = nums[0];
    document.getElementById("result2").innerHTML = 'The largest: ' + largest + '<hr\>';
}
function FizzBuzz() {
    var numbers = [100];
    for (var i = 0; i < 100; i++) {
        numbers[i] = i + 1;
    }
    for (var j = 0; j < numbers.length; j++) {
        if (numbers[j] % 2 == 0 && numbers[j] % 3 == 0) {
            numbers[j] = 'FizzBuzz';
        }
        else if (numbers[j] % 2 == 0) {
            numbers[j] = 'Buzz';
        }
        else if (numbers[j] % 3 == 0) {
            numbers[j] = 'Fizz';
        }
        
    }
    for (var n in numbers) {
       console.log(numbers[n]);
    }
    
}