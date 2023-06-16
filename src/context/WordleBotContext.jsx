import React, { createContext, useReducer, useEffect } from "react";

import wordleBotReducer from "../reducers/wordleBotReducer";
import initialState from "../constants/initializations/initialState";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";
import { sendWord } from "../actions/wordleBotActions";

const WordleBotContext = createContext();

const WordleBotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wordleBotReducer, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    useEffect(() => {
        const Initialize = async () => {
            dispatch({type: WORDLEBOT_TYPES.SEND_REQUEST})
            const word = await sendWord([])
            dispatch({type: WORDLEBOT_TYPES.SET_GUESS, payload: word})
        }

        Initialize()
    }, [])

    return (
        <WordleBotContext.Provider value={{ state, dispatch }}>
            {children}
        </WordleBotContext.Provider>
    );
};

export { WordleBotContext, WordleBotProvider };
