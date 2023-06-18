import React from "react";

import { Button } from "react-bootstrap";

import { useSuggestedWord, useGuessData, useLoadingFlag } from "../../../hooks";

const Suggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const { setGuessInput, guessData } = useGuessData();
    const {isLoadingFlag} = useLoadingFlag()

    const handleClick = () => {
        setGuessInput(suggestedWord);
    };

    return (
        <Button onClick={() => handleClick()} variant="info" className="text-uppercase" disabled={!guessData.editFlag || isLoadingFlag}> 
            {suggestedWord}
        </Button>
    );
};

export default Suggestion;
