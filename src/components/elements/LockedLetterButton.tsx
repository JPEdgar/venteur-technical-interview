import React from "react";

import { Button } from "react-bootstrap";

console.log("get data here");
type LockedLetterButtonProps = {
    letterObject: any;
};

const LockedLetterButton = ({ letterObject }: LockedLetterButtonProps) => {
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
