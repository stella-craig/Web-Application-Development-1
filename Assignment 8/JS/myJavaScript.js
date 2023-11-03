// myJavaScript.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('hi!')
    const buttons = document.querySelectorAll('.tac');
    let currentPlayer = 'X';
    const playerTurnElement = document.getElementById('player-turn'); // Get the player turn element
    playerTurnElement.textContent = `Current Player: ${currentPlayer}`; // Set initial player


        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.backgroundColor = '#878787';
                // Only allow changing the value if the button hasn't been selected yet
                if (this.textContent === '') {
                    this.textContent = currentPlayer;
                    this.classList.add('selected');
                    // Toggle the currentPlayer
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    // Update the display to show who the next player is
                    playerTurnElement.textContent = `Current Player: ${currentPlayer}`;
                }
            });
    });

    const resetButton = document.getElementById('btn-reset');
    resetButton.addEventListener('click', function() {
        buttons.forEach(button => {
            button.textContent = '';
            button.classList.remove('selected');
            button.style.backgroundColor = '#f4f4f4';
        });
        currentPlayer = 'X'; // Reset current player to 'X'
        playerTurnElement.textContent = `Current Player: ${currentPlayer}`; // Update player turn display
    });
});
