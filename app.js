document.addEventListener("DOMContentLoaded", function (){
	function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        return 'Rock'
    } else if(randomNumber===1){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }

	}
	function resetGame() {
		playerWin = 0;
		computerWin = 0;
		updateWinCounts();
		// Add event listeners back
		rButton.addEventListener("click", rockClickHandler);
		pButton.addEventListener("click", paperClickHandler);
		sButton.addEventListener("click", scissorsClickHandler);
		const computerImage = document.getElementById('computer-image');
		const playerImage = document.getElementById('player-image');
		computerImage.src = 'qmark.png';
		playerImage.src= 'qmark.png';
		resetValues();
	}
	function resetValues() {
		const initialDetail = "Whoever gets 5 wins first wins"; // Set the initial detail value
		const initialGameRes = "Make a decision!"; // Set the initial game result value
		const gameResElement =  document.getElementById('rule');
		const gameDetailElement = document.getElementById('opening');
		gameDetailElement.textContent = initialDetail;
		gameResElement.textContent = initialGameRes;
	}
	function playRPS(playerSelection, computerSelection){
			if(playerSelection.toLowerCase()==='rock'){
			if(computerSelection==='Rock'){
					return "It's a tie"
			}
			else if(computerSelection==='Paper'){
					return "You lost!"
					
			}
			else if(computerSelection==='Scissors'){
					return "You won!"
					
			}
			}
			else if(playerSelection.toLowerCase()==='scissors'){
			if(computerSelection==='Rock'){
					return "You lost!"
					
			}
			else if(computerSelection==='Paper'){
					return "You won!"
					
			}
			else if(computerSelection==='Scissors'){
					return "It's a tie"
			}
			}
			else if(playerSelection.toLowerCase()==='paper'){
			if(computerSelection==='Rock'){
					return "You won!"
					
			}
			else if(computerSelection==='Paper'){
					return "It's a tie"
			}
			else if(computerSelection==='Scissors'){
					return "You lost!"
					
			}
			}
			else{
				return "Invalid input"
			}
	}
	function decisionsCompared(playerSelection, computerSelection){
		if(playerSelection.toLowerCase()==='rock'){
		if(computerSelection==='Rock'){
				return "Rock ties with rock"
		}
		else if(computerSelection==='Paper'){
				return "Paper beats rock"
				
		}
		else if(computerSelection==='Scissors'){
				return "Rock beats scissors"
				
		}
		}
		else if(playerSelection.toLowerCase()==='scissors'){
		if(computerSelection==='Rock'){
				return "Rock beats scissors"
				
		}
		else if(computerSelection==='Paper'){
				return "Scissors beats paper"
				
		}
		else if(computerSelection==='Scissors'){
				return "Scissors ties with scissors"
		}
		}
		else if(playerSelection.toLowerCase()==='paper'){
		if(computerSelection==='Rock'){
				return "Paper beats rock"
				
		}
		else if(computerSelection==='Paper'){
				return "Paper ties with paper"
		}
		else if(computerSelection==='Scissors'){
				return "Scissors beat paper"
				
		}
		}
		else{
			return "Invalid input"
		}
	}
	const rButton = document.getElementById('rock');
	const pButton = document.getElementById("paper");
	const sButton = document.getElementById("scissors");
	const resultsDiv = document.getElementById("results");
	const playerWinsElement = document.getElementById('player-wins');
	const computerWinsElement = document.getElementById('computer-wins');
	function updateWinCounts() {
		playerWinsElement.textContent = `Player: ${playerWin}`;
		computerWinsElement.textContent = `Computer: ${computerWin}`;
	}
	let playerWin = 0
	let computerWin = 0
	function gameResult(){
			if(playerWin===5){
				rButton.removeEventListener("click", rockClickHandler);
				pButton.removeEventListener("click", paperClickHandler);
				sButton.removeEventListener("click", scissorsClickHandler);
				const playAgain = confirm("You won! You have won 5 times. Do you want to play again?");
				if (playAgain) {
					resetGame();
				}
			}
			
			else if(computerWin===5){
				rButton.removeEventListener("click", rockClickHandler);
				pButton.removeEventListener("click", paperClickHandler);
				sButton.removeEventListener("click", scissorsClickHandler);
				const playAgain = confirm("You lost! The computer has won 5 times. Do you want to play again?");
				if (playAgain) {
					resetGame();
				}
			}
	}
	function rockClickHandler(){
		const computerSelection = getComputerChoice();
		const result = playRPS("rock", computerSelection);
		if(result.includes("You lost!")){
			computerWin++;
		}
		else if(result.includes("You won!")){
			playerWin++;
		}
		const playerImage = document.getElementById('player-image');
		if (playerImage) {// Check if the element exists before manipulating it
      playerImage.src = 'rock.png';
			playerImage.classList.add('custom-image-size');
    }
		const computerImage = document.getElementById('computer-image');
		if(computerImage){
			if(computerSelection==='Rock'){
				computerImage.src = 'rock.png';
			}
			else if(computerSelection==='Paper'){
				computerImage.src = 'paper.png';
			}
			else{
				computerImage.src = 'scissors.png';
			}
			computerImage.classList.add('custom-image-size');
		}
		const gameRes = result;
		const gameResElement =  document.getElementById('rule');
		const detail = decisionsCompared("rock", computerSelection);
		const gameDetail = detail;
		const gameDetailElement = document.getElementById('opening');
		gameDetailElement.textContent = gameDetail;
		gameResElement.textContent = gameRes;
		updateWinCounts();
		setTimeout(() => {
			const winMessage = gameResult();
			if (winMessage) {
					resultsDiv.innerHTML += `<br>${winMessage}`;
			}
	}, 100);
		console.log(result);
	};

	function paperClickHandler(){
		const computerSelection = getComputerChoice();
		const result = playRPS("paper", computerSelection);
		if(result.includes("You lost!")){
			computerWin++;
		}
		else if(result.includes("You won!")){
			playerWin++;
		}
		const playerImage = document.getElementById('player-image');
		if (playerImage) {// Check if the element exists before manipulating it
      playerImage.src = 'paper.png';
			playerImage.classList.add('custom-image-size');
    }
		const computerImage = document.getElementById('computer-image');
		if(computerImage){
			if(computerSelection==='Rock'){
				computerImage.src = 'rock.png';
			}
			else if(computerSelection==='Paper'){
				computerImage.src = 'paper.png';
			}
			else{
				computerImage.src = 'scissors.png';
			}
			computerImage.classList.add('custom-image-size');
		}
		const gameRes = result;
		const gameResElement =  document.getElementById('rule');
		const detail = decisionsCompared("paper", computerSelection);
		const gameDetail = detail;
		const gameDetailElement = document.getElementById('opening');
		gameDetailElement.textContent = gameDetail;
		gameResElement.textContent = gameRes;
		updateWinCounts();
		setTimeout(() => {
			const winMessage = gameResult();
			if (winMessage) {
					resultsDiv.innerHTML += `<br>${winMessage}`;
			}
	}, 100);
		console.log(result);
	};

	function scissorsClickHandler(){
		const computerSelection = getComputerChoice();
		const result = playRPS("scissors", computerSelection);
		if(result.includes("You lost!")){
			computerWin++;
		}
		else if(result.includes("You won!")){
			playerWin++;
		}
		const playerImage = document.getElementById('player-image');
		const computerImage = document.getElementById('computer-image');
		if (playerImage) {// Check if the element exists before manipulating it
      playerImage.src = 'scissors.png';
			playerImage.classList.add('custom-image-size');
    }
		if(computerImage){
			if(computerSelection==='Rock'){
				computerImage.src = 'rock.png';
			}
			else if(computerSelection==='Paper'){
				computerImage.src = 'paper.png';
			}
			else{
				computerImage.src = 'scissors.png';
			}
			computerImage.classList.add('custom-image-size');
		}
		const gameRes = result;
		const gameResElement =  document.getElementById('rule');
		const detail = decisionsCompared("scissors", computerSelection);
		const gameDetail = detail;
		const gameDetailElement = document.getElementById('opening');
		gameDetailElement.textContent = gameDetail;
		gameResElement.textContent = gameRes;
		updateWinCounts();
		setTimeout(() => {
			const winMessage = gameResult();
			if (winMessage) {
					resultsDiv.innerHTML += `<br>${winMessage}`;
			}
	}, 100);
		console.log(result);
	};
	rButton.addEventListener("click", rockClickHandler);
	pButton.addEventListener("click", paperClickHandler);
	sButton.addEventListener("click", scissorsClickHandler);
});





// Your JavaScript code goes here