import { TRY_GUESS, RESET_GAME } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const guessReducer = (state=initialState, action) => {
    if (action.type === TRY_GUESS) {
      let feedback;

    // const duplicateGuess = state.guesses.filter((guess) => guess === action.guess);
    // if(duplicateGuess) {
    //     console.log('!!!!');
    // }

    const difference = Math.abs(action.guess - state.correctAnswer);

    if (difference >= 50) {
        feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
        feedback = "You're Cold...";
    } else if (difference >= 10) {
        feedback = "You're Warm.";
    } else if (difference >= 1) {
        feedback = "You're Hot!";
    } else {
        feedback = 'You got it!';
    }

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, action.guess],
        });
    }

    if (action.type === RESET_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess',
            auralStatus: '',
            correctAnswer: action.correctAnswer
        });
    }
    return state
}


