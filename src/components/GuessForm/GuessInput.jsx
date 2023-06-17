import React from "react";

import { Form } from "react-bootstrap";

import { useLoadingFlag, useGuessData, useErrorMessage } from "../../hooks";
import { checkIfString } from "../../utils";
import EditClues from "./EditClues";

const GuessInput = () => {
    const { isLoadingFlag } = useLoadingFlag();
    const { guessData, setGuessInput } = useGuessData();
    const { errorMessage, setErrorMessage } = useErrorMessage();

    const handleChange = (e) => {
        if (checkIfString(e.target.value)) setGuessInput(e.target.value);
        else setErrorMessage("Only letters are allowed (A-Z)");
    };

    React.useEffect(() => {
        // console.log(guessData);
    }, [guessData]);

    return (
        <>
            <Form onSubmit={null}>
                <Form.Control
                    type="text"
                    onChange={handleChange}
                    maxLength={5}
                    value={guessData.input}
                    disabled={isLoadingFlag}
                />
            </Form>
            <p>{errorMessage}</p>
            {guessData.attemptList.length > 0 &&
                guessData.attemptList.map((attempListData, attempListIndex) => <EditClues key={`guessData-attemptList-map-${attempListIndex}-`}/>)}
        </>
    );
};

export default GuessInput;
