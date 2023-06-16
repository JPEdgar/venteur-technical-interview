import React from "react";

import { Container } from "react-bootstrap";

import { WordleBotProvider } from "./WordleBotContext";

const GlobalWrapper = ({ children }) => {
    return (
        <WordleBotProvider>
            <Container>{children}</Container>;
        </WordleBotProvider>
    );
};

export default GlobalWrapper;
