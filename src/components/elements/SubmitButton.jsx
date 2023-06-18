import React from "react";

import { Button } from "react-bootstrap";

import { useGuessData, useLoadingFlag } from "../../hooks";

const SubmitButton = ({ handleSubmit }) => {
    const { guessData } = useGuessData();
    const { isLoadingFlag } = useLoadingFlag();
    return (
        <div className="w-100 ms-4">
            <Button
                onClick={handleSubmit}
                className="w-100 "
                disabled={guessData.editFlag || isLoadingFlag}
            >
                Submit
            </Button>
        </div>
    );
};

export default SubmitButton;
