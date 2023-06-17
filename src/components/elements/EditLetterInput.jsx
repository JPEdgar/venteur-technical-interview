import React from "react";

import { Form } from "react-bootstrap";

const EditLetterInput = ({
    handleBlur,
    handleEdit,
    handleFocus,
    letterObj,
    attemptListIndex,
    letterObjectIndex,
}) => {
    const handleSubmit = (e) => e.preventDefault();

    return (
        <Form
            onSubmit={handleSubmit}
            className="w-100"
            onBlur={() => handleBlur(attemptListIndex, letterObjectIndex)}
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
