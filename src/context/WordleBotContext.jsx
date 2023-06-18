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
            dispatch({ type: WORDLEBOT_TYPES.SEND_REQUEST });
            const word = await sendWord([]);
            // console.log(word);
            dispatch({ type: WORDLEBOT_TYPES.SET_BOT_SUGGESTION, payload: {result: {word}} });
        };

        // Initialize()

        dispatch({ type: WORDLEBOT_TYPES.SET_BOT_SUGGESTION, payload: { result: {guess: "testa"} } });
    }, []);

    return (
        <WordleBotContext.Provider value={{ state, dispatch }}>
            {children}
        </WordleBotContext.Provider>
    );
};

export { WordleBotContext, WordleBotProvider };
