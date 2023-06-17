import React from "react";

import BotSuggestion from "./BotSuggestion";
import GuessInput from "./GuessInput";
import EditClues from "./EditClues";

const GuessForm = () => {
    return (
        <>
            <EditClues />
            <BotSuggestion />
            <GuessInput />
        </>
    );
};

export default GuessForm;
