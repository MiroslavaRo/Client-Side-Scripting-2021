var flag = 1;
var gameOver = false;
function CheckForWinners(cell) {

    c1 = document.getElementById("cell1");
    c2 = document.getElementById("cell2");
    c3 = document.getElementById("cell3");
    c4 = document.getElementById("cell4");
    c5 = document.getElementById("cell5");
    c6 = document.getElementById("cell6");
    c7 = document.getElementById("cell7");
    c8 = document.getElementById("cell8");
    c9 = document.getElementById("cell9");
    var cells = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

    Play(cell);
    var message;
    if (PlayerXWin(cells) == true) {
        document.getElementById('result5').innerHTML = "Player X won!";
        message = "GAME OVER! Player X won!";
        alert(message);  
        for (var c = 0; c < 9; c++) {
            cells[c].disabled = true;
        }
        
    }
    else if (PlayerOWin(cells) == true) {
        document.getElementById('result5').innerHTML = "Player O won!";
        message = "GAME OVER! Player O won!";
        alert(message);
        for (var c = 0; c < 9; c++) {
            cells[c].disabled = true;

        }
    }
    else if (!PlayerXWin(cells) && !PlayerOWin(cells) && AllDisabled(cells)) {
        document.getElementById('result5').innerHTML = "Match Tie!";
        message = "GAME OVER! Match Tie!";
        alert(message);
    }
    else {
        if (flag == 1) {
            document.getElementById('result5').innerHTML = "Player X turn!";
           
        }
        else {
            document.getElementById('result5').innerHTML = "Player 0 turn!";
          
        }
    }
}

function PlayerXWin(cells) {

    if ((cells[0].value == 'X') && (cells[1].value == 'X') && (cells[2].value == 'X')) {
            return true;
    }
    if ((cells[3].value == 'X') && (cells[4].value == 'X') && (cells[5].value == 'X')) {
            return true;
        }
    if ((cells[6].value == 'X') && (cells[7].value == 'X') && (cells[8].value == 'X')) {
        return true;
        }
    if ((cells[0].value == 'X') && (cells[3].value == 'X') && (cells[6].value == 'X')) {
            return true;
        }
    if ((cells[1].value == 'X') && (cells[4].value == 'X') && (cells[7].value == 'X')) {
        return true;
        }
    if ((cells[2].value == 'X') && (cells[5].value == 'X') && (cells[8].value == 'X')) {
            return true;
        }
    if ((cells[0].value == 'X') && (cells[4].value == 'X') && (cells[8].value == 'X')) {
        return true;
        }
    if ((cells[6].value == 'X') && (cells[4].value == 'X') && (cells[2].value == 'X')) {
            return  true;
    }
    return false;
}

function PlayerOWin(cells) {
    if ((cells[0].value == 'O') && (cells[1].value == 'O') && (cells[2].value == 'O')) {
        return true;
    }
    if ((cells[3].value == 'O') && (cells[4].value == 'O') && (cells[5].value == 'O')) {
        return true;
    }
    if ((cells[6].value == 'O') && (cells[7].value == 'O') && (cells[8].value == 'O')) {
        return true;
    }
    if ((cells[0].value == 'O') && (cells[3].value == 'O') && (cells[6].value == 'O')) {
        return true;
    }
    if ((cells[1].value == 'O') && (cells[4].value == 'O') && (cells[7].value == 'O')) {
        return true;
    }
    if ((cells[2].value == 'O') && (cells[5].value == 'O') && (cells[8].value == 'O')) {
        return true;
    }
    if ((cells[0].value == 'O') && (cells[4].value == 'O') && (cells[8].value == 'O')) {
        return true;
    }
    if ((cells[6].value == 'O') && (cells[4].value == 'O') && (cells[2].value == 'O')) {
        return true;
    }
    return false;
}
function AllDisabled(cells) {
    var k = 0;
    for (var i in cells) {
        if (cells[i].disabled) {
            k++;
        }
    }
    if (k == 9) {
        return true;
    }
    return false;
}

function Play(cell) {
    if (!cell.disabled) {
        if (flag == 1) {
            cell.value = "X";
            document.getElementById(cell.id).innerHTML = 'X';
            cell.disabled = true;
            flag = 0;
        }
        else {
            cell.value = "O";
            document.getElementById(cell.id).innerHTML = 'O';
            cell.disabled = true;
            flag = 1;
        }
    }
}
