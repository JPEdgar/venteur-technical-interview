import React, { useState } from "react";


import useWordleBotContext from "./context/useWordleBotContext";

const useSuggestedWord = () => {
    const { state } = useWordleBotContext();
    
    const suggestedWord = () => {
        return state.botSuggestion
    }

    return { suggestedWord };
};

export default useSuggestedWord;
