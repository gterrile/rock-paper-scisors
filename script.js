const player_paper = document.getElementById('player-paper');
const player_rock = document.getElementById('player-rock');
const player_scissors = document.getElementById('player-scissors');
const player_lizard = document.getElementById('player-lizard');
const player_spock = document.getElementById('player-spock');

const computer_paper = document.getElementById('computer-paper');
const computer_rock = document.getElementById('computer-rock');
const computer_scissors = document.getElementById('computer-scissors');
const computer_lizard = document.getElementById('computer-lizard');
const computer_spock = document.getElementById("computer-spock");


function generateWinner() {
  
  // Cleans h1 display winner
  document.getElementById('winner-display').textContent = ' ';

  // List of win-loose relations. First number is the winner.
  winners = [
    [0,1], [0,4], [1,2], [1,3], [2,0], [2,3], [3,0], [3,4], [4,1], [4,2]
  ];

  // Generates computer choice.
  var computer = document.getElementsByName('computer');
  var computer_choice = Math.floor(Math.random() * 5);

  // Displays computer choice.
  console.log("Computer choice: ", computer_choice);
  computer[computer_choice].checked = true;

  // Gets player choice from page.
  var player = document.getElementsByName('player');
  var player_choice = 0;
  for (i = 0; i < player.length; i++) {
    if (player[i].checked)
      player_choice = player[i].value;
      console.log("Player choose:", player[i].value);
  }

  // Tie situation
  if (player_choice == computer_choice) {
    document.getElementById('winner-display').textContent = "Tie"
  }

  // Display winner
  for (i = 0; i < 10; i++) {
    if (player_choice == winners[i][0] && computer_choice == winners[i][1]) {
      document.getElementById('winner-display').textContent = "Player 1 wins"
      break;
    }
    if (computer_choice == winners[i][0] && player_choice == winners[i][1]) {
      document.getElementById('winner-display').textContent = "Computer wins"
      break;
    }
  }

}
