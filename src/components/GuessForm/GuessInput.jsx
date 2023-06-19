import React from "react";

import { Form, InputGroup, Button } from "react-bootstrap";

import { useLoadingFlag, useGuessData, useErrorMessage } from "../../hooks";
import { checkIfString } from "../../utils";

const GuessInput = () => {
    const { isLoadingFlag } = useLoadingFlag();
    const { guessData, setGuessInput } = useGuessData();
    const { errorMessage, setErrorMessage } = useErrorMessage();

    const handleChange = (e) => {
        if (checkIfString(e.target.value)) setGuessInput(e.target.value);
        else setErrorMessage("Only letters are allowed (A-Z)");
    };

    const handleClick = () => {
        setGuessInput("");
    };

    return (
        <>
            <InputGroup className="mt-1">
                <Button
                    onClick={() => handleClick()}
                    disabled={!guessData.editFlag || isLoadingFlag}
                >
                    Clear
                </Button>
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    maxLength={5}
                    value={guessData.input}
                    disabled={isLoadingFlag || !guessData.editFlag}
                    placeholder={
                        isLoadingFlag
                            ? "Please wait..."
                            : !guessData.editFlag
                            ? "Please refer to the section above..."
                            : "Enter your guess..."
                    }
                />
            </InputGroup>
            <p className="error-text">{errorMessage}</p>
        </>
    );
};

export default GuessInput;
