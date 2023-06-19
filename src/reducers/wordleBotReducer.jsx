import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

import { cloneDeep } from "../utils";
import initialState from "../constants/initializations/initialState";

// STATE -- taken from initialState.js
// {
//     guessList: [], // an array specifically formatted for the api: [{word: string, clue: string}]
//     isLoadingFlag: false,
//     error: "",
//     botSuggestion: "",
//     guessData: {
//         editFlag: true,
//         input: "",
//         attemptList: [], // an array of objects:  [{letter: string, code: string, edit: bool}]
//     },
//     gameCleared: {
//         gameClearedFlag: false,
//         gameVictoryFlag: false,
//     },
// };

const wordleBotReducer = (state = {}, action) => {
    // console.log("in wordleBotReducer > {state, action} = ", { state, action });
    switch (action.type) {
        case WORDLEBOT_TYPES.SEND_REQUEST:
            return { ...state, isLoadingFlag: true, error: "", botSuggestion: "" };

        case WORDLEBOT_TYPES.SET_ERROR:
            return { ...state, isLoadingFlag: false, error: action.payload.message };

        case WORDLEBOT_TYPES.SET_BOT_SUGGESTION:
            const setGuess_state = cloneDeep(state.guessData);
            setGuess_state.editFlag = true;
            return {
                ...state,
                isLoadingFlag: false,
                error: "",
                botSuggestion: action.payload.guess,
                guessData: { ...setGuess_state },
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
            if (action.payload.override) toggleClue_tempObj.code = action.payload.override;
            else if (toggleClue_tempObj.code === "x") toggleClue_tempObj.code = "y";
            else if (toggleClue_tempObj.code === "y") toggleClue_tempObj.code = "g";
            else toggleClue_tempObj.code = "x";
            toggleClue_state.editFlag = false;
            return { ...state, guessData: { ...toggleClue_state } };

        case WORDLEBOT_TYPES.EDIT_CLUE:
            const editClue_state = cloneDeep(state.guessData);
            const editClue_attemptList = editClue_state.attemptList;
            editClue_attemptList[action.payload.attemptIndex][
                action.payload.letterIndex
            ].edit = true;
            editClue_state.editFlag = false;
            return { ...state, guessData: { ...editClue_state } };

        case WORDLEBOT_TYPES.EDIT_CLUE_LETTER:
            const editClueLetter_state = cloneDeep(state.guessData);
            editClueLetter_state.attemptList[action.payload.attemptListIndex][
                action.payload.letterObjectIndex
            ].edit = false;
            editClueLetter_state.attemptList[action.payload.attemptListIndex][
                action.payload.letterObjectIndex
            ].letter = action.payload.e.target.value;
            editClueLetter_state.editFlag = false;
            return { ...state, guessData: { ...editClueLetter_state } };

        case WORDLEBOT_TYPES.BLUR_FROM_CLUE:
            const blurFromClue_state = cloneDeep(state.guessData);
            blurFromClue_state.attemptList[action.payload.attemptListIndex][
                action.payload.letterObjectIndex
            ].edit = false;
            blurFromClue_state.editFlag = false;
            return { ...state, guessData: { ...blurFromClue_state } };

        case WORDLEBOT_TYPES.GAME_VICTORY:
            const gameVictory_state = cloneDeep(state.gameCleared);
            gameVictory_state.gameClearedFlag = true;
            gameVictory_state.gameVictoryFlag = true;
            return { ...state, gameCleared: { ...gameVictory_state } };

        case WORDLEBOT_TYPES.RESET_GAME:
            const resetGame_state = cloneDeep(state.guessData);
            resetGame_state.editFlag = true;
            return {
                ...initialState,
                isLoadingFlag: true,
                error: "",
                botSuggestion: "",
            };

        default:
            return state;
    }
};

export default wordleBotReducer;
