import React from "react";

import { Form } from "react-bootstrap";

import { useLoadingFlag } from "../../hooks";

const GuessInput = () => {
    const { isLoadingFlag } = useLoadingFlag();

    return (
        !isLoadingFlag && 
        <Form onSubmit={null}>
            <Form.Control type="text" onChange={null} maxLength={5} value={null} />
        </Form>
    );
};

export default GuessInput;
