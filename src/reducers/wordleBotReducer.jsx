import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const wordleBotReducer = (state = {}, action) => {
    switch (action.type) {
        case WORDLEBOT_TYPES.SEND_REQUEST:
            return { ...state, isLoadingFlag: true, error: "", botSuggestion: "" };
        case WORDLEBOT_TYPES.SET_ERROR:
            return { ...state, isLoadingFlag: false, error: action.payload.message };
        case WORDLEBOT_TYPES.SET_GUESS:
            return {
                ...state,
                isLoadingFlag: false,
                error: "",
                botSuggestion: action.payload.guess,
            };
        case WORDLEBOT_TYPES.SET_GUESS_INPUT:
            const setGuessInput_guessInput = state.guessData;
            setGuessInput_guessInput.input = action.payload;
            return { ...state, guessData: { ...setGuessInput_guessInput } };
        default:
            return state;
    }
};

export default wordleBotReducer;
