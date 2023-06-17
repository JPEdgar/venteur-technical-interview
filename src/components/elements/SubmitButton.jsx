import React from "react";

import { Button } from "react-bootstrap";

const SubmitButton = ({ handleSubmit }) => {
    return (
        <div className="w-100 ms-4">
            <Button onClick={handleSubmit} className="w-100 ">
                Submit
            </Button>
        </div>
    );
};

export default SubmitButton;
