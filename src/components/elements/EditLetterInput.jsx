import React from "react";

import { Form } from "react-bootstrap";

const EditLetterInput = ({
    handleSubmit,
    handleBlur,
    handleEdit,
    handleFocus,
    letterObj,
    attemptListIndex,
    letterObjectIndex,
}) => {
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
