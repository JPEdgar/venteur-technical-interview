import React from "react";

import { useSendWord, useErrorMessage } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();

     const Test = () => {
        sendWord([]);
    };

    return (
        <>
            <button onClick={() => Test()}>Test</button>
            {errorMessage() && <div>{errorMessage()}</div>}
        </>
    );
};

export default Test;
