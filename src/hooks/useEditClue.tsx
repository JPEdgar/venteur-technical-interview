import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useEditClue = () => {
    const { dispatch } = useWordleBotContext();

    const editClue = (attemptIndex: number, letterIndex: number) => {
        dispatch({ type: WORDLEBOT_TYPES.EDIT_CLUE, payload: { attemptIndex, letterIndex } });
    };

    const editClueLetter = (e: any, attemptListIndex: number, letterObjectIndex: number) => {
        dispatch({
            type: WORDLEBOT_TYPES.EDIT_CLUE_LETTER,
            payload: { e, attemptListIndex, letterObjectIndex },
        });
    };

    const blurFromClue = (e: any, attemptListIndex: number, letterObjectIndex: number) => {
        dispatch({
            type: WORDLEBOT_TYPES.BLUR_FROM_CLUE,
            payload: { e, attemptListIndex, letterObjectIndex },
        });
    };

    return { editClue, editClueLetter, blurFromClue };
};

export default useEditClue;
