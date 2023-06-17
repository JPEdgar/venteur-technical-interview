import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const useGoBack = () => {
    const { state, dispatch } = useWordleBotContext();

    const goBack = () => {
        dispatch({type: WORDLEBOT_TYPES.GO_BACK})
    }

    return { goBack };
};

export default useGoBack;
