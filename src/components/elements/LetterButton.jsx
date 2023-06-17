import React from "react";

import { SplitButton } from "react-bootstrap";

const LetterButton = ({
    handleClick,
    handleToggle,
    letterObject,
    attemptListIndex,
    letterObjectIndex,
}) => {
    return (
        <SplitButton
            className="w-100"
            onClick={() => handleClick(attemptListIndex, letterObjectIndex)}
            variant={
                letterObject.code === "x"
                    ? "secondary"
                    : letterObject.code === "y"
                    ? "warning"
                    : "success"
            }
            title={letterObject.letter}
            show={false}
            onToggle={() => handleToggle(attemptListIndex, letterObjectIndex)}
        />
    );
};

export default LetterButton;
