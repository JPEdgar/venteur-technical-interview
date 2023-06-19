import React from "react";

import { Button } from "react-bootstrap";

const BackButton = ({ handleBack }) => {
    return (
        <div className="d-flex w-100">
            <Button className="w-100" variant="danger" onClick={() => handleBack()} >
                Back
            </Button>
        </div>
    );
};

export default BackButton;
