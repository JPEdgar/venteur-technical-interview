import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useEditClue = () => {
    const { dispatch } = useWordleBotContext();

    const editClue = (attemptIndex, letterIndex) => {
        dispatch({ type: WORDLEBOT_TYPES.EDIT_CLUE, payload: { attemptIndex, letterIndex } });
    };

    return { editClue };
};

export default useEditClue;
