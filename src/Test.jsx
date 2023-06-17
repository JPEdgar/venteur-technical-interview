import React, { useState, useEffect, useRef } from "react";

import { Spinner, Form, Stack, Button, SplitButton } from "react-bootstrap";

import { useSendWord, useErrorMessage, useSuggestedWord, useLoadingFlag } from "./hooks";

const Test = () => {
    const { sendWord } = useSendWord();
    const { errorMessage } = useErrorMessage();
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();

    const resetData = () => {
        return { editFlag: true, input: "", attemptList: [] };
    };
    const [data, setData] = useState(resetData()); // {letter: "", code: "", edit: bool}

    const Test = () => {
        sendWord([]);
    };

    const createAttemptObject = (attempt) => {
        const returnList = [];
        const attemptList = attempt.split("");
        for (let i = 0; i < attemptList.length; i++) {
            returnList.push({ letter: attemptList[i], code: "x", edit: false });
        }
        return returnList;
    };

    const handleChange = (e) => {
        setData((curr) => ({ ...curr, input: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let letterArray = [];
        let codeArray = [];
        const returnArray = [];
        const { attemptList } = data;
        // console.log(attemptList)
        for (let i = 0; i < attemptList.length; i++) {
            for (let j = 0; j < attemptList[i].length; j++) {
                console.log(attemptList[i][j]);
                letterArray.push(attemptList[i][j].letter);
                codeArray.push(attemptList[i][j].code);
            }
            const word = letterArray.toString().replace(/,/g, "");
            const clue = codeArray.toString().replace(/,/g, "");
            returnArray.push({ word, clue });
            letterArray = [];
            codeArray = [];
        }
        // console.log(returnArray)
        sendWord(returnArray);
        setData(resetData());
        setData((curr) => ({
            ...curr,
            editFlag: true,
        }));
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

    const handleBack = () => {
        const revisedAttemptList = [...data.attemptList];
        revisedAttemptList.pop();
        setData((curr) => ({
            ...curr,
            editFlag: true,
            attemptList: revisedAttemptList,
        }));
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        const revisedAttemptList = [...data.attemptList];
        revisedAttemptList[attemptListIndex][letterObjectIndex].edit = true;
        setData((curr) => ({
            ...curr,
            attemptList: revisedAttemptList,
        }));
    };

    const handleBlur = (attemptListIndex, letterObjectIndex) => {
        const revisedAttemptList = [...data.attemptList];
        revisedAttemptList[attemptListIndex][letterObjectIndex].edit = false;
        setData((curr) => ({
            ...curr,
            attemptList: revisedAttemptList,
        }));
    };

    const handleEdit = (e, attemptListIndex, letterObjectIndex) => {
        const revisedAttemptList = [...data.attemptList];
        revisedAttemptList[attemptListIndex][letterObjectIndex].edit = false;
        revisedAttemptList[attemptListIndex][letterObjectIndex].letter = e.target.value;

        setData((curr) => ({ ...curr, attemptList: revisedAttemptList }));
    };

    useEffect(() => {
        if (data.input?.length >= 5) {
            const attemptObject = createAttemptObject(data.input);
            setData((curr) => ({
                ...curr,
                input: "",
                attemptList: [...curr.attemptList, attemptObject],
                editFlag: false,
            }));
        }
        console.log(data);
    }, [data]);

    return (
        <>
            <button onClick={() => console.log(data)}>Log Data</button>
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

            {data.editFlag && (
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        maxLength={5}
                        value={data.input}
                    />
                </Form>
            )}

            {data.attemptList.length > 0 &&
                data.attemptList.map((letterObject, attemptListIndex) => {
                    return (
                        <Stack
                            key={`letter-stack-${data.letter}-${attemptListIndex}-${Math.random()}`}
                            direction="horizontal"
                            gap={4}
                        >
                            <div className="w-100 me-4">
                                <Button
                                    className="w-100"
                                    variant="danger"
                                    onClick={() => handleBack()}
                                >
                                    Back
                                </Button>
                            </div>
                            {letterObject.map((letterObj, letterObjectIndex) =>
                                !data.attemptList[attemptListIndex][letterObjectIndex].edit ? (
                                    <SplitButton
                                        key={`button-stack-${
                                            letterObj.letter
                                        }-${letterObjectIndex}-${Math.random()}`}
                                        className="w-100"
                                        onClick={() =>
                                            handleClick(attemptListIndex, letterObjectIndex)
                                        }
                                        variant={
                                            letterObj.code === "x"
                                                ? "secondary"
                                                : letterObj.code === "y"
                                                ? "warning"
                                                : "success"
                                        }
                                        title={letterObj.letter}
                                        show={false}
                                        onToggle={() =>
                                            handleToggle(attemptListIndex, letterObjectIndex)
                                        }
                                    />
                                ) : (
                                    <Form
                                        onSubmit={handleSubmit}
                                        key={`input-stack-${
                                            letterObj.letter
                                        }-${letterObjectIndex}-${Math.random()}`}
                                        className="w-100"
                                        onBlur={() =>
                                            handleBlur(attemptListIndex, letterObjectIndex)
                                        }
                                    >
                                        <Form.Control
                                            type="text"
                                            onChange={(e) =>
                                                handleEdit(e, attemptListIndex, letterObjectIndex)
                                            }
                                            maxLength={1}
                                            value={letterObj.letter}
                                            autoFocus
                                            onFocus={handleFocus}
                                        />
                                    </Form>
                                )
                            )}
                            <div className="w-100 ms-4">
                                <Button onClick={handleSubmit} className="w-100 ">
                                    Submit
                                </Button>
                            </div>
                        </Stack>
                    );
                })}
        </>
    );
};

export default Test;
