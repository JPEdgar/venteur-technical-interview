import React from "react";

import { Stack } from "react-bootstrap";

import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
    LetterButton, // handleClick , handleToggle, letterObject, attemptListIndex, letterObjectIndex
} from "../elements";
import { useGoBack, useToggleClue } from "../../hooks";
import { createId } from "../../utils";

const EditClues = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { toggleClue } = useToggleClue();
    // console.log(data);

    const handleClick = (attemptIndex, letterIndex) => {
        // let tempAttemptList = [...data.attemptList];
        // const tempLetterObj = tempAttemptList[attemptIndex][letterIndex];

        // if (tempLetterObj.code === "x") tempLetterObj.code = "y";
        // else if (tempLetterObj.code === "y") tempLetterObj.code = "g";
        // else tempLetterObj.code = "x";

        // tempAttemptList[attemptIndex][letterIndex] = tempLetterObj;

        // setData((curr) => ({ ...curr, attemptList: tempAttemptList }));
        // console.log({ attemptIndex, letterIndex });
        toggleClue(attemptIndex, letterIndex);
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        // const revisedAttemptList = [...data.attemptList];
        // revisedAttemptList[attemptListIndex][letterObjectIndex].edit = true;
        // setData((curr) => ({ ...curr, attemptList: revisedAttemptList, }));
    };

    const handleBack = () => {
        goBack();
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // let letterArray = [];
        // let codeArray = [];
        // const returnArray = [];
        // const { attemptList } = data;
        // for (let i = 0; i < attemptList.length; i++) {
        //     for (let j = 0; j < attemptList[i].length; j++) {
        //         console.log(attemptList[i][j]);
        //         letterArray.push(attemptList[i][j].letter);
        //         codeArray.push(attemptList[i][j].code);
        //     }
        //     returnArray.push({ word, clue });
        //     letterArray = [];
        //     codeArray = [];
        // }
        // sendWord(returnArray);
        // setData((curr) => ({ ...curr, editFlag: true, }));
    };

    return (
        <>
            <Stack direction="horizontal" gap={2}>
                <BackButton handleBack={handleBack} />
                {data.map((letterData, letterIndex) =>
                    letterData.edit ? (
                        <></>
                    ) : (
                        <LetterButton
                            key={createId()}
                            attemptListIndex={index}
                            letterObjectIndex={letterIndex}
                            letterObject={letterData}
                            handleClick={() => handleClick(index, letterIndex)}
                            handleToggle={() => handleToggle(index, letterIndex)}
                        />
                    )
                )}
                <SubmitButton handleSubmit={handleSubmit} />
            </Stack>
        </>
    );
};

export default EditClues;
