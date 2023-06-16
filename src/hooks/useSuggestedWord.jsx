import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";

const useSuggestedWord = () => {
    const { state } = useWordleBotContext();

    const suggestedWord = state.botSuggestion;

    return { suggestedWord };
};

export default useSuggestedWord;
