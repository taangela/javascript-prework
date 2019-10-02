function playGame(playerInput) {

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
		console.log('dziala');
	}

	clearMessages();
	
	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if(argMoveId == 2){
	  	return 'papier';
	  } else if(argMoveId == 3){
	  	return 'nożyce';
	  } else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    return 'nieznany ruch';
	  }
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);


	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);



	let argComputerMove = computerMove;
	let argPlayerMove = playerMove;


	function displayResult(argComputerMove, argPlayerMove){
	  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

	  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	    printMessage('Ty wygrywasz!');
	  	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('Ty przegrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Ty przegrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('Ty przegrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		}else if (argComputerMove === argPlayerMove) {
			printMessage('Remis!');
		}else {
			printMessage("Wpisałeś złą liczbę");
		}
	}

	displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});