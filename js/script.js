function clearMessages() {
    document.getElementById('messages').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}



function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        gameResult =1;
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ty przegrywasz!');
        gameResult =2;
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
        gameResult =1;
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ty przegrywasz!');
        gameResult =2
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ty przegrywasz!');
        gameResult =2;
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        gameResult=1;
    } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
        gameResult=3;
    } else {
        printMessage("Wpisałeś złą liczbę");
        gameResult=3;
    }
}

let playerResult =0;
let computerResult =0;

function showResult (gameResult) {
    if (gameResult == 1) {
        playerResult = playerResult + 1;
        printResult ('Komputer: '+computerResult+' Gracz: '+playerResult);
    } else if (gameResult == 2) {
        computerResult = computerResult + 1;
        printResult('Komputer: '+computerResult+' Gracz: '+playerResult);
    } else {
        printResult ('Komputer: '+computerResult+' Gracz: '+playerResult);
    }

}

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);
    
    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);

    showResult(gameResult);
}


document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});


document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});


document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});