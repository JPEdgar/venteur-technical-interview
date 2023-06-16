import React from "react";

import { Spinner } from "react-bootstrap";

import { useSendWord, useErrorMessage, useSuggestedWord, useLoadingFlag } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();

    const Test = () => {
        sendWord();
    };

    return (
        <>
            <button onClick={() => Test()} disabled={isLoadingFlag}>
                Test
            </button>
            {errorMessage && <div>{errorMessage}</div>}
            {suggestedWord && (
                <div>
                    I suggest <span className="text-uppercase fs-2">{suggestedWord}</span>
                </div>
            )}
            {isLoadingFlag && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </>
    );
};

export default Test;
