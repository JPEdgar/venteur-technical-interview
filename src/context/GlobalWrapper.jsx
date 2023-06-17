import React from "react";

import { Container } from "react-bootstrap";

import { WordleBotProvider } from "./WordleBotContext";

const GlobalWrapper = ({ children }) => {
    return (
        <WordleBotProvider>
            <Container style={{height: "100vh", backgroundColor: "cyan2"}}>{children}</Container>;
        </WordleBotProvider>
    );
};

export default GlobalWrapper;
