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
            return {
                ...state,
                isLoadingFlag: false,
                error: "",
                botSuggestion: action.payload.guess,
            };
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

        case WORDLEBOT_TYPES.GO_BACK:
            const goBack_state = cloneDeep(state.guessData);
            goBack_state.editFlag = true;
            if (goBack_state.attemptList.length > 0) goBack_state.attemptList.pop();
            return { ...state, guessData: { ...goBack_state } };
        case WORDLEBOT_TYPES.TOGGLE_CLUE:
            const toggleClue_state = cloneDeep(state.guessData);
            const toggleClue_attemptList = toggleClue_state.attemptList;
            const toggleClue_tempObj =
                toggleClue_attemptList[action.payload.attemptIndex][action.payload.letterIndex];
            if (toggleClue_tempObj.code === "x") toggleClue_tempObj.code = "y";
            else if (toggleClue_tempObj.code === "y") toggleClue_tempObj.code = "g";
            else toggleClue_tempObj.code = "x";
            return { ...state, guessData: { ...toggleClue_state } };
        case WORDLEBOT_TYPES.EDIT_CLUE:
            const editClue_state = cloneDeep(state.guessData);
            const editClue_attemptList = editClue_state.attemptList;
            editClue_attemptList[action.payload.attemptIndex][
                action.payload.letterIndex
            ].edit = true;
            return { ...state, guessData: { ...editClue_state } };
        default:
            return state;
    }
};

export default wordleBotReducer;
