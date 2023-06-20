import React from "react";

import { Button } from "react-bootstrap";

type BackButtonProps = {
    handleBack: () => void;
};

const BackButton = ({ handleBack }: BackButtonProps) => {
    return (
        <div className="d-flex w-100">
            <Button className="w-100" variant="danger" onClick={() => handleBack()}>
                Back
            </Button>
        </div>
    );
};

export default BackButton;
