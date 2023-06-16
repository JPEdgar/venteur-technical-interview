import React, { createContext, useReducer, useEffect } from "react";

import wordleBotReducer from "../reducers/wordleBotReducer"
const WordleBotContext = createContext();

const WordleBotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wordleBotReducer, {});
    return <WordleBotContext.Provider>{children}</WordleBotContext.Provider>;
};

export {WordleBotContext, WordleBotProvider};
