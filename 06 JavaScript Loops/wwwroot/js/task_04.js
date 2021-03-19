/*
  3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
7. Write a JavaScript program to sort the items of an array.
12. Write a JavaScript program to compute the sum and product of an array of integers.
20. Write a JavaScript program to find duplicate values in a JavaScript array.
*/


function FirstElement(n) {
    var arr = [];
    var arrN = [];
    for (var i = 0; i < 20; i++) {
        arr[i] = i + 1;
    }

    for (var j = 0; j < n; j++) {
        arrN[j]=arr[j];
    }
    console.log('Array: '+arr.join(','));
    console.log('Display first ' + n + ' elements: ' + arrN.join(','));
}

function Sort(array) {
    console.log('Array: ' + array.join(','));
    array.sort(function (a, b) {
        return a - b;
    });
    console.log('Sorted: ' + array.join(','));
}

function ArraySumAndProduct(array) {
    var sum = 0;
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }
    var result = 'Sum: ' + sum + ' Product: ' + product;
    console.log(result);
}

function Dublicate(array) {
    var counter = 0;
    var elem = 0;
    var dublicates = [];
    var result;
    for (var i = 0; i < array.length; i++) {
        counter = 0;
        for (var j = array.length - 1; j >= 0; j--) {
            if (array[i] === array[j]) {
                counter++;
                elem = array[j];
            }
        }
        if (counter > 1 && !dublicates.includes(elem)) {
            dublicates.push(elem);
        }
    }
    var result = 'Dublicated numbers: ' + dublicates.join(' ');
    console.log(result);
}