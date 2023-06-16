import React, { useState, useEffect, useRef } from "react";

import { Spinner, Form, Stack, Button } from "react-bootstrap";

import { useSendWord, useErrorMessage, useSuggestedWord, useLoadingFlag } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();

    const [data, setData] = useState({ input: "", attemptList: [] });

    const Test = () => {
        sendWord([]);
    };

    const handleChange = (e) => {
        setData((curr) => ({ ...curr, input: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    useEffect(() => {
        if (data.input?.length >= 5) {
            const attemptList = data.attemptList;
            attemptList.push(data.input.split(""));
            setData((curr) => ({ ...curr, input: "", attemptList: attemptList }));
        }
    }, [data]);

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
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    maxLength={5}
                    value={data.input}
                />
            </Form>

            {data.attemptList.length > 0 &&
                data.attemptList.map((data, index) => {
                    return (
                        <Stack key={`letter-stack-${data}-${index}`} direction="horizontal" gap={4}>
                            {data.map((letter, index) => <Button key={`button-stack-${letter}-${index}`} className="w-100">{letter}</Button>)}
                        </Stack>
                    );
                })}
        </>
    );
};

export default Test;
