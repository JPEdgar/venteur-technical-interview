import React from "react";

import { Button } from "react-bootstrap";

const BackButton = ({ handleBack }) => {
    return (
        <div className="w-100 me-4">
            <Button className="w-100" variant="danger" onClick={() => handleBack()}>
                Back
            </Button>
        </div>
    );
};

export default BackButton;
