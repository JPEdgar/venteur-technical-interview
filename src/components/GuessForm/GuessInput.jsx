import React from "react";

import { Form } from "react-bootstrap";

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

    return (
        <>
            <Form onSubmit={null}>
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    maxLength={5}
                    value={guessData.input}
                    disabled={isLoadingFlag || !guessData.editFlag}
                />
            </Form>
            <p>{errorMessage}</p>
        </>
    );
};

export default GuessInput;
