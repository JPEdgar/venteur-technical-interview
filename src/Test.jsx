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

    const handleClick = (attemptIndex, letterIndex) => {
        let tempAttemptList = [...data.attemptList];
        const tempLetterObj = tempAttemptList[attemptIndex][letterIndex];

        if (tempLetterObj.code === "x") tempLetterObj.code = "y";
        else if (tempLetterObj.code === "y") tempLetterObj.code = "g";
        else tempLetterObj.code = "x";

        tempAttemptList[attemptIndex][letterIndex] = tempLetterObj;

        setData((curr) => ({ ...curr, attemptList: tempAttemptList }));
    };

    const createAttemptObject = (attempt) => {
        const returnList = [];
        const attemptList = attempt.split("");
        for (let i = 0; i < attemptList.length; i++) {
            returnList.push({ letter: attemptList[i], code: "x" });
        }
        return returnList;
    };

    useEffect(() => {
        if (data.input?.length >= 5) {
            const attemptObject = createAttemptObject(data.input);
            setData((curr) => ({
                ...curr,
                input: "",
                attemptList: [...curr.attemptList, attemptObject],
            }));
        }
        console.log(data);
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
                data.attemptList.map((letterObject, attemptListIndex) => {
                    return (
                        <Stack
                            key={`letter-stack-${data.letter}-${attemptListIndex}-${Math.random()}`}
                            direction="horizontal"
                            gap={4}
                        >
                            {letterObject.map((letterObj, letterObjectIndex) => (
                                <Button
                                    key={`button-stack-${
                                        letterObj.letter
                                    }-${letterObjectIndex}-${Math.random()}`}
                                    className="w-100"
                                    onClick={() => handleClick(attemptListIndex, letterObjectIndex)}
                                    variant={
                                        letterObj.code === "x"
                                            ? "secondary"
                                            : letterObj.code === "y"
                                            ? "warning"
                                            : "success"
                                    }
                                >
                                    {letterObj.letter}
                                </Button>
                            ))}
                        </Stack>
                    );
                })}
        </>
    );
};

export default Test;
