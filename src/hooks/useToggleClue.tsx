import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useToggleClue = () => {
    const { dispatch } = useWordleBotContext();

    const toggleClue = (attemptIndex: number, letterIndex: number, override: any) => {
        dispatch({
            type: WORDLEBOT_TYPES.TOGGLE_CLUE,
            payload: { attemptIndex, letterIndex, override },
        });
    };

    return { toggleClue };
};

export default useToggleClue;
