import React from "react";

import { sendWord as sendWordAction } from "../actions/wordleBotActions";

import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";
import useWordleBotContext from "./context/useWordleBotContext";

const useSendWord = () => {
    const { dispatch } = useWordleBotContext();

    const sendWord = async (wordList) => {
        dispatch({ type: WORDLEBOT_TYPES.SEND_REQUEST });
        const result = await sendWordAction(wordList);
        if (result.name === "Error") {
            dispatch({ type: WORDLEBOT_TYPES.SET_ERROR, payload: result });
        } else {
            dispatch({ type: WORDLEBOT_TYPES.SET_BOT_SUGGESTION, payload: result });
        }
    };

    return { sendWord };
};

export default useSendWord;
