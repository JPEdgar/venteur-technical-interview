import React from "react";

import { Button } from "react-bootstrap";

const LockedLetterButton = ({ letterObject }) => {
    return (
        <Button
            className="w-100 text-center btn-locked"
            variant={
                letterObject.code === "x"
                    ? "secondary"
                    : letterObject.code === "y"
                    ? "warning"
                    : "success"
            }
        >
            {letterObject.letter.toUpperCase()}
        </Button>
    );
};

export default LockedLetterButton;
