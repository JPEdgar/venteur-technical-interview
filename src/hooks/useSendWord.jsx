import React, { useState } from "react";

import { sendWord as sendWordAction } from "../actions/wordleBotActions";

import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes"
import useWordleBotContext from "./context/useWordleBotContext";

const useSendWord = () => {
    const {state, dispatch}  = useWordleBotContext()


    const sendWord = async (request) => {
        dispatch({type: WORDLEBOT_TYPES.SEND_REQUEST})
        const result = await sendWordAction(request);
        // console.log("result = ", result);
    };

    return { sendWord };
};

export default useSendWord;
