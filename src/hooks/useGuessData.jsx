import React, { useEffect } from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

import { createAttemptObject } from "../utils";

const useGuessData = () => {
    const { state, dispatch } = useWordleBotContext();

    const guessData = state.guessData;

    const setGuessInput = (data) => {
        if (data.length < 5) dispatch({ type: WORDLEBOT_TYPES.SET_GUESS_INPUT, payload: data });
        else {
            const attemptObject = createAttemptObject(data);
            dispatch({ type: WORDLEBOT_TYPES.SET_GUESS_OBJECT, payload: attemptObject });
        }
    };

    // useEffect(() => {
    //     // console.log(guessData);
    //     if (guessData.input.length >= 5) {

    //     }
    // }, [guessData]);

    return { guessData, setGuessInput };
};

export default useGuessData;
