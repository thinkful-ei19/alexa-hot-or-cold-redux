//try guess -- modifies guess and feedback
//restart game action -- reset to empty []

export const TRY_GUESS = 'TRY_GUESS';
export const tryGuess = (guess, feedback) => ({
    type: TRY_GUESS,
    guess,
    feedback
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME,
});


// export const ADD_FEEDBACK = 'ADD_FEEDBACK';
// export const addFeedback = feedback => ({
//     type: ADD_FEEDBACK,
//     feedback
// });




// export const ADD_AURAL = 'ADD_AURAL';
// export const addAural = auralStatus => ({
//     type: ADD_AURAL,
//     auralStatus
// });