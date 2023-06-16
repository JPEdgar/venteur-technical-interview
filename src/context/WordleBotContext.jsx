import React, { createContext, useReducer, useEffect } from "react";

import wordleBotReducer from "../reducers/wordleBotReducer";
import initialState from "../constants/initializations/initialState";

const WordleBotContext = createContext();

const WordleBotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wordleBotReducer, initialState);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <WordleBotContext.Provider value={{ state, dispatch }}>
            {children}
        </WordleBotContext.Provider>
    );
};

export { WordleBotContext, WordleBotProvider };
