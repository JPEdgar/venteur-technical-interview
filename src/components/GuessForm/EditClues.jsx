import React from "react";

import { Stack } from "react-bootstrap";

import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
    LetterButton, // handleClick , handleToggle, letterObject, attemptListIndex, letterObjectIndex
} from "../elements";
import { createId } from "../../utils";

const EditClues = ({ data, index }) => {
    console.log(data);

    const handleClick = (attemptIndex, letterIndex) => {
        let tempAttemptList = [...data.attemptList];
        const tempLetterObj = tempAttemptList[attemptIndex][letterIndex];

        if (tempLetterObj.code === "x") tempLetterObj.code = "y";
        else if (tempLetterObj.code === "y") tempLetterObj.code = "g";
        else tempLetterObj.code = "x";

        tempAttemptList[attemptIndex][letterIndex] = tempLetterObj;

        // setData((curr) => ({ ...curr, attemptList: tempAttemptList }));
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        const revisedAttemptList = [...data.attemptList];
        revisedAttemptList[attemptListIndex][letterObjectIndex].edit = true;
        // setData((curr) => ({ ...curr, attemptList: revisedAttemptList, }));
    };

    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <BackButton handleBack={null} />
                {data.map((letterData, letterIndex) =>
                    letterData.edit ? (
                        <></>
                    ) : (
                        <LetterButton
                            key={createId()}
                            attemptListIndex={index}
                            letterObjectIndex={letterIndex}
                            letterObject={letterData}
                            handleClick={() => handleClick()}
                            handleToggle={() => handleToggle()}
                        />
                    )
                )}
                <SubmitButton handleSubmit={null} />
            </Stack>
        </>
    );
};

export default EditClues;
