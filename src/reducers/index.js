import { ADD_GUESS, ADD_FEEDBACK } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const guessReducer = (state=initialState, action) => {
    if (action.type === ADD_GUESS) {
        return {
            ...state,
            guesses: [...state.guesses, action.guess]
        }
    }
    if (action.type === ADD_FEEDBACK) {
        return {
            ...state,
            feedback: action.feedback
        }
    }
}