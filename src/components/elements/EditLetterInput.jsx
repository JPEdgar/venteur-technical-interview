import React from "react";

import { Form } from "react-bootstrap";

import { useEditClue } from "../../hooks";
import { checkIfString } from "../../utils";

const EditLetterInput = ({ letterObj, attemptListIndex, letterObjectIndex }) => {
    const { editClueLetter, blurFromClue } = useEditClue();

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

    const handleSubmit = (e) => e.preventDefault();

    return (
        <Form
            onSubmit={handleSubmit}
            className="w-100"
            onBlur={(e) => handleBlur(e, attemptListIndex, letterObjectIndex)}
        >
            <Form.Control
                type="text"
                onChange={(e) => handleEdit(e, attemptListIndex, letterObjectIndex)}
                maxLength={1}
                value={letterObj.letter}
                autoFocus
                onFocus={handleFocus}
            />
        </Form>
    );
};

export default EditLetterInput;
