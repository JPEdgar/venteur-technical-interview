import React from "react";

import { useSendWord, useErrorMessage, useSuggestedWord } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();
    const { suggestedWord } = useSuggestedWord();

    const Test = () => {
        sendWord([]);
    };

    return (
        <>
            <button onClick={() => Test()}>Test</button>
            {errorMessage() && <div>{errorMessage()}</div>}
            {suggestedWord() && (
                <div>
                    I suggest <span className="text-uppercase fs-2">{suggestedWord()}</span>
                </div>
            )}
        </>
    );
};

export default Test;
