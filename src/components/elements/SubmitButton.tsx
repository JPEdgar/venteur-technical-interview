import React from "react";

import { Button } from "react-bootstrap";

import { useGuessData, useLoadingFlag } from "../../hooks";

console.log("get data here")
type SubmitButtonProps = {
    handleSubmit: any;
};

const SubmitButton = ({ handleSubmit }: SubmitButtonProps) => {
    const { guessData } = useGuessData();
    const { isLoadingFlag } = useLoadingFlag();
    return (
        <div className="d-flex w-100">
            <Button
                onClick={handleSubmit}
                className="w-100"
                disabled={guessData.editFlag || isLoadingFlag}
            >
                Submit
            </Button>
        </div>
    );
};

export default SubmitButton;
