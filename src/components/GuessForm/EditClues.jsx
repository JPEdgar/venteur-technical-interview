import React from "react";

import { Stack, Button } from "react-bootstrap";

import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
    LetterButton, // handleClick , handleToggle, letterObject, attemptListIndex, letterObjectIndex
    EditLetterInput, // handleSubmit, handleBlur, handleEdit, handleFocus, letterObj, attemptListIndex, letterObjectIndex,
    LockedLetterButton,
} from "../elements";
import { useGoBack, useToggleClue, useEditClue, useGuessData, useSendWord } from "../../hooks";
import { createId, checkIfString, prepareGuessForSuggestion } from "../../utils";

const EditClues = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { toggleClue } = useToggleClue();
    const { editClue, editClueLetter, blurFromClue } = useEditClue();
    const { guessData } = useGuessData();
    const { sendWord } = useSendWord();

    const handleClick = (attemptIndex, letterIndex) => {
        toggleClue(attemptIndex, letterIndex);
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        editClue(attemptListIndex, letterObjectIndex);
    };

    const handleBack = () => {
        goBack();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const returnArray = prepareGuessForSuggestion(guessData);
        sendWord(returnArray);
    };

    const handleBlur = (e, attemptListIndex, letterObjectIndex) => {
        blurFromClue(e, attemptListIndex, letterObjectIndex);
    };

    const handleEdit = (e, attemptListIndex, letterObjectIndex) => {
        if (checkIfString(e.target.value)) editClueLetter(e, attemptListIndex, letterObjectIndex);
        else blurFromClue(e, attemptListIndex, letterObjectIndex);
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    return (
        <>
            <Stack direction="horizontal" gap={2}>
                {guessData.attemptList.length === index + 1 ? (
                    <BackButton handleBack={handleBack} />
                ) : (
                    <div className="w-100 me-4 text-center">Guess {index + 1}</div>
                )}
                {data.map((letterData, letterIndex) =>
                    letterData.edit ? (
                        <EditLetterInput
                            key={createId()}
                            handleBlur={(e) => handleBlur(e, index, letterIndex)}
                            handleEdit={(e) => handleEdit(e, index, letterIndex)}
                            handleFocus={handleFocus}
                            letterObj={letterData}
                            attemptListIndex={index}
                            letterObjectIndex={letterIndex}
                        />
                    ) : guessData.attemptList.length === index + 1 ? (
                        <LetterButton
                            key={createId()}
                            attemptListIndex={index}
                            letterObjectIndex={letterIndex}
                            letterObject={letterData}
                            handleClick={() => handleClick(index, letterIndex)}
                            handleToggle={() => handleToggle(index, letterIndex)}
                        />
                    ) : (
                        <LockedLetterButton key={createId()} letterObject={letterData} />
                    )
                )}
                {guessData.attemptList.length === index + 1 ? (
                    <SubmitButton handleSubmit={handleSubmit} />
                ) : (
                    <div className="w-100 ms-4"/>
                )}
            </Stack>
        </>
    );
};

export default EditClues;
