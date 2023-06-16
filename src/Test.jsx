import React from "react";

import { useSendWord } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();

    const testReq = [];

    const Test = () => {
        sendWord();
    };

    return (
        <>
            <button onClick={() => Test()}>Test</button>
        </>
    );
};

export default Test;
