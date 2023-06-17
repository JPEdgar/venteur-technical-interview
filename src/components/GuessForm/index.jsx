import React from "react";

import Bot from "./Bot";
import GuessInput from "./GuessInput";
import EditClues from "./EditClues";

const GuessForm = () => {
    return (
        <>
            <EditClues />
            <Bot />
            <GuessInput />
        </>
    );
};

export default GuessForm;
