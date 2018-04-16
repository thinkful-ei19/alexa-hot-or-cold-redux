//try guess -- modifies guess and feedback
//restart game action -- reset to empty []

export const TRY_GUESS = 'TRY_GUESS';
export const tryGuess = (guess) => ({
    type: TRY_GUESS,
    guess
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = (correctAnswer) => ({
    type: RESET_GAME,
    correctAnswer
});


// export const ADD_AURAL = 'ADD_AURAL';
// export const addAural = auralStatus => ({
//     type: ADD_AURAL,
//     auralStatus
// });