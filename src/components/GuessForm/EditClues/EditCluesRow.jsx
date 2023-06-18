import React from "react";

import { Stack } from "react-bootstrap";

import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
    LetterButton, // handleClick , handleToggle, letterObject, attemptListIndex, letterObjectIndex
    EditLetterInput, // handleSubmit, handleBlur, handleEdit, handleFocus, letterObj, attemptListIndex, letterObjectIndex,
    LockedLetterButton,
} from "../../elements";
import { useGoBack, useGuessData, useSendWord } from "../../../hooks";
import { createId, prepareGuessForSuggestion, createSuggestionHistory } from "../../../utils";

const EditCluesRow = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { guessData } = useGuessData();
    const { sendWord } = useSendWord();

    const handleBack = () => {
        goBack();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const historyList = createSuggestionHistory(guessData)
        const wordList = prepareGuessForSuggestion(guessData);
        console.log(historyList)
        sendWord(wordList); // to be converted into an object: one for api (wordList), one for history (historyList) {wordList, historyList}
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
                        />
                    ) : (
                        <LockedLetterButton key={createId()} letterObject={letterData} />
                    )
                )}
                {guessData.attemptList.length === index + 1 ? (
                    <SubmitButton handleSubmit={handleSubmit} />
                ) : (
                    <div className="w-100 ms-4" />
                )}
            </Stack>
        </>
    );
};

export default EditCluesRow;
