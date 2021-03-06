﻿const x = 2;
const y = 3;

var openedImages = 0;
var firstImageValue = 0;


const playground = generatePlayground(x, y);
populatePlayground(x, y);

function generatePlayground(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }

    return arr;
}

function populatePlayground(a, b) {
    // inserting elements to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            let number;
            do {
                number = getRandomInt(x * y / 2) + 1;
            } while (!checkCardsNumber(number));

            playground[i][j] = number;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function checkCardsNumber(number) {
    counter = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (playground[i][j] == number) {
                counter++
            }
        }
    }
    if (counter >= 2) {
        return false;
    }
    return true;
}

function closeAllImages() {
    firstImageValue = 0;
    $("img").attr("src", "images/back.jpg");
    $("img").attr("selected", false);
}

var moveCounter = 0;
$(document).ready(function () {
    $("img").click(function () {        
        if (openedImages >= 2) {
            closeAllImages();
            openedImages = 0;           
            return;
        }

        openedImages++;

        $(this).hide();

        let x = $(this).data("x");
        let y = $(this).data("y");

        if (firstImageValue == 0) {
            firstImageValue = playground[x][y];

            $(this).attr("selected", true);
            moveCounter++;
        }
        else {
            if (firstImageValue == playground[x][y]) {
                $(this).attr("selected", true);
                // Remove images
                $("img[selected='selected']").remove();

                var imgs = document.getElementsByTagName('img');
                if (imgs.length === 0) {
                    alert("Game over! You opened all cards!");
                }
                openedImages = 0;
                firstImageValue = 0;
            }
        }

        $(this).attr("src", "images/img" + playground[x][y] + ".jpg");
        $(this).show();
        document.getElementById('counter').value = moveCounter;
    });
   
});