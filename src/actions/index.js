export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
    type: ADD_GUESS,
    guess
});

export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export const addFeedback = feedback => ({
    type: ADD_FEEDBACK,
    feedback
});