import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useErrorMessage = () => {
    const { state, dispatch } = useWordleBotContext();

    const errorMessage = state.error;

    const setErrorMessage = (message) => {
        dispatch({ type: WORDLEBOT_TYPES.SET_ERROR, payload: { message } });
    };

    return { errorMessage, setErrorMessage };
};

export default useErrorMessage;
