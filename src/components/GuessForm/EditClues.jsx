import React from "react";

import { Stack } from "react-bootstrap";

import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
    LetterButton, // handleClick , handleToggle, letterObject, attemptListIndex, letterObjectIndex
} from "../elements";
import { useGoBack, useToggleClue, useEditClue } from "../../hooks";
import { createId } from "../../utils";

const EditClues = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { toggleClue } = useToggleClue();
    const { editClue } = useEditClue();
    // console.log(data);

    const handleClick = (attemptIndex, letterIndex) => {
        toggleClue(attemptIndex, letterIndex);
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        // const revisedAttemptList = [...data.attemptList];
        // revisedAttemptList[attemptListIndex][letterObjectIndex].edit = true;
        // setData((curr) => ({ ...curr, attemptList: revisedAttemptList, }));
        editClue(attemptListIndex, letterObjectIndex);
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
