import React from "react";

import { SplitButton, Button, ButtonGroup, Row, Container } from "react-bootstrap";

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
        <Container className="edit-row pt-1 pb-2">
            <SplitButton
                className="w-100 mt-1"
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

            <ButtonGroup className="d-none d-sm-flex w-100">
                <Button
                    className="color-button-group "
                    size="sm"
                    variant="secondary"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "x")}
                />

                <Button
                    className="color-button-group "
                    size="sm"
                    variant="warning"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "y")}
                />
                <Button
                    className="color-button-group "
                    size="sm"
                    variant="success"
                    onClick={() => handleClick(attemptListIndex, letterObjectIndex, "g")}
                />
            </ButtonGroup>
        </Container>
    );
};

export default LetterButton;
