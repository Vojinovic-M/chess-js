// Initialize ChessboardJS
var board = Chessboard('board', {
    draggable: true,
    position: 'start',
    onDrop: handleMove
});

// Initialize Chess.js for game logic
var game = new Chess();

// Update the display for which side's turn it is
function updateTurnText() {
    var turnText = game.turn() === 'w' ? "White to Move" : "Black to Move";
    document.getElementById('turnText').innerText = turnText;
}

// Handle piece drop
function handleMove(source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // Automatically promote to queen when pawn reaches last rank
    });

    // If move is illegal, snap piece back to original square
    if (move === null) {
        return 'snapback';
    }

    // If the move is valid, check for game end conditions
    checkGameEnd();

    // Update turn text
    updateTurnText();
}

// Check for checkmate, draw, or stalemate
function checkGameEnd() {
    if (game.in_checkmate()) {
        setTimeout(() => alert('Checkmate! Game Over.'), 10);
        board.position('start'); // Reset board after game over
    } else if (game.in_draw()) {
        setTimeout(() => alert('Draw!'), 10);
        board.position('start'); // Reset board after game over
    } else if (game.in_stalemate()) {
        setTimeout(() => alert('Stalemate!'), 10);
        board.position('start'); // Reset board after game over
    }
}

// Reset game button
document.getElementById('resetBtn').addEventListener('click', function() {
    game.reset();
    board.start();
    updateTurnText();
});

// Start position button
document.getElementById('startBtn').addEventListener('click', function() {
    game.reset();
    board.start();
    updateTurnText();
});

// Set initial turn text
updateTurnText();
