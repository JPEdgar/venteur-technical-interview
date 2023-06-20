import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

import { createAttemptObject } from "../utils";

const useGuessData = () => {
    const { state, dispatch } = useWordleBotContext();

    const guessData = state.guessData;

    const setGuessInput = (data: any) => {
        if (data.length < 5) dispatch({ type: WORDLEBOT_TYPES.SET_GUESS_INPUT, payload: data });
        else {
            const attemptObject = createAttemptObject(data);
            dispatch({ type: WORDLEBOT_TYPES.SET_GUESS_OBJECT, payload: attemptObject });
        }
    };

    return { guessData, setGuessInput };
};

export default useGuessData;
