import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useGuessData = () => {
    const { state, dispatch } = useWordleBotContext();

    const guessData = state.guessData;

    const setGuessInput = (data) => {
        dispatch({ type: WORDLEBOT_TYPES.SET_GUESS_INPUT, payload: data });
    };

    return { guessData, setGuessInput };
};

export default useGuessData;
