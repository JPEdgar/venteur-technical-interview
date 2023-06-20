import React from "react";

import { Form } from "react-bootstrap";

import { useEditClue } from "../../hooks";
import { checkIfString } from "../../utils";

console.log("get data here");
type EditLetterInputProps = {
    letterObj: any;
    attemptListIndex: number;
    letterObjectIndex: number;
};

const EditLetterInput = ({
    letterObj,
    attemptListIndex,
    letterObjectIndex,
}: EditLetterInputProps) => {
    const { editClueLetter, blurFromClue } = useEditClue();

    const handleBlur = (e: any, attemptListIndex: number, letterObjectIndex: number) => {
        blurFromClue(e, attemptListIndex, letterObjectIndex);
    };

    const handleEdit = (e: any, attemptListIndex: number, letterObjectIndex: number) => {
        if (checkIfString(e.target.value)) editClueLetter(e, attemptListIndex, letterObjectIndex);
        else blurFromClue(e, attemptListIndex, letterObjectIndex);
    };

    const handleFocus = (e: any) => {
        e.target.select();
    };

    const handleSubmit = (e: any) => e.preventDefault();

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
