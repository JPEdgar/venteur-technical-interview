import React from "react";

import { SplitButton, Button, ButtonGroup } from "react-bootstrap";

import { useToggleClue, useEditClue } from "../../hooks";

const LetterButton = ({ letterObject, attemptListIndex, letterObjectIndex }) => {
    const { toggleClue } = useToggleClue();
    const { editClue } = useEditClue();

    const handleClick = (attemptIndex, letterIndex, override) => {
        toggleClue(attemptIndex, letterIndex, override);
    };

    const handleToggle = (attemptListIndex, letterObjectIndex) => {
        editClue(attemptListIndex, letterObjectIndex);
    };

    return (
        <div>
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
                title={letterObject.letter.toUpperCase()}
                show={false}
                onToggle={() => handleToggle(attemptListIndex, letterObjectIndex)}
            />
            <ButtonGroup>
                <Button
                    variant="secondary"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "x")}
                />
                <Button
                    variant="warning"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "y")}
                />
                <Button
                    variant="success"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "g")}
                />
            </ButtonGroup>
        </div>
    );
};

export default LetterButton;
