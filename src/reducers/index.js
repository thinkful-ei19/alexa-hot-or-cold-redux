import { TRY_GUESS, RESET_GAME } from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

// //check to see if guess is correct -- add logic
export const guessReducer = (state=initialState, action) => {
    if (action.type === TRY_GUESS) {
        return Object.assign({}, {
            ...state,
            guesses: [...state.guesses, action.guess],
            feedback: action.feedback
        })
    }
    if (action.type === RESET_GAME) {
        return Object.assign({}, {
            guesses: [],
            feedback: 'Make your guess',
            auralStatus: '',
            correctAnswer: Math.round(Math.random() * 100) + 1
        });
    }
    return state
}



// export const guessReducer = (state=initialState, action) => {
//     if (action.type === ADD_GUESS) {
//         return {
//             ...state,
//             guesses: [...state.guesses, action.guess]
//         }
//     }
//     if (action.type === ADD_FEEDBACK) {
//         return {
//             ...state,
//             feedback: action.feedback
//         }
//     }
// }