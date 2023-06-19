import React from "react";

import { Button } from "react-bootstrap";

import { useSuggestedWord, useGuessData, useLoadingFlag } from "../../../hooks";

const Suggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const { setGuessInput, guessData } = useGuessData();
    const { isLoadingFlag } = useLoadingFlag();

    const handleClick = () => {
        setGuessInput(suggestedWord);
    };

    return (
        <div className="">
            <Button
                onClick={() => handleClick()}
                variant="outline-info"
                className="text-uppercase btn-suggest"
                disabled={!guessData.editFlag || isLoadingFlag}
            >
                <div>{suggestedWord}</div>
            </Button>
            <div className="text-center btn-suggestion-autofill">Click to auto-fill</div>
        </div>
    );
};

export default Suggestion;
