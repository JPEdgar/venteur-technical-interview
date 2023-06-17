import React from "react";

import { Button } from "react-bootstrap";

import { useSuggestedWord, useGuessData } from "../../../hooks";

const Suggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const { setGuessInput } = useGuessData();

    const handleClick = () => {
        setGuessInput(suggestedWord);
    };

    return (
        <Button onClick={() => handleClick()} variant="info" className="text-uppercase">
            {suggestedWord}
        </Button>
    );
};

export default Suggestion;
