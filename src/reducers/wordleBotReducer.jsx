import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

import { cloneDeep } from "../utils";

// STATE
// {
//     guessList: [], // [{word: string, clue: string}]
//     isLoadingFlag: false,
//     error: "",
//     botSuggestion: "",
//     guessData: { editFlag: true, input: "", attemptList: [] },
// };

const wordleBotReducer = (state = {}, action) => {
    // console.log("in wordleBotReducer > {state, action} = ", {state, action})
    switch (action.type) {
        case WORDLEBOT_TYPES.SEND_REQUEST:
            return { ...state, isLoadingFlag: true, error: "", botSuggestion: "" };
        case WORDLEBOT_TYPES.SET_ERROR:
            return { ...state, isLoadingFlag: false, error: action.payload.message };
        case WORDLEBOT_TYPES.SET_GUESS:
            return { ...state, isLoadingFlag: false, error: "", botSuggestion: action.payload.guess, };
        case WORDLEBOT_TYPES.SET_GUESS_INPUT:
            const setGuessInput_state = cloneDeep(state.guessData);
            setGuessInput_state.input = action.payload;
            return { ...state, guessData: { ...setGuessInput_state } };
        case WORDLEBOT_TYPES.SET_GUESS_OBJECT:
            const setGuessObject_state = cloneDeep(state.guessData);

            setGuessObject_state.input = "";
            setGuessObject_state.editFlag = false;
            setGuessObject_state.attemptList = [...state.guessData.attemptList, action.payload];

            return { ...state, guessData: { ...setGuessObject_state } };
            // return state

        default:
            return state;
    }
};

export default wordleBotReducer;
