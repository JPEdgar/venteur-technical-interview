import React, { useState, useEffect, useRef } from "react";

import { Spinner, Form, Stack } from "react-bootstrap";

import { useSendWord, useErrorMessage, useSuggestedWord, useLoadingFlag } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();

    const [data, setData] = useState({});

    const Test = () => {
        sendWord([]);
    };

    const selectList = ["1", "2", "3", "4", "5"];

    const handleChange = (e) => {
        console.log(e.target.name);
        if (e.target.name === "input-1") input2.current.focus();
        else if (e.target.name === "input-2") input3.current.focus();
        else if (e.target.name === "input-3") input4.current.focus();
        else if (e.target.name === "input-4") input5.current.focus();
        else if (e.target.name === "input-5") input1.current.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here");
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const input1 = useRef("");
    const input2 = useRef("");
    const input3 = useRef("");
    const input4 = useRef("");
    const input5 = useRef("");

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
            {isLoadingFlag && <Spinner animation="border" />}
            <Form onSubmit={handleSubmit}>
                <Stack direction="horizontal" gap={4}>
                    {selectList.map((value, index) => (
                        <Form.Control
                            key={`form-control-${value}-${index}`}
                            type="text"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            // eslint-disable-next-line no-eval
                            maxLength={1}
                            name={`input-${value}`}
                            ref={eval(`input${value}`)}
                        />
                    ))}
                </Stack>
            </Form>
        </>
    );
};

export default Test;
