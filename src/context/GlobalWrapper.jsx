import React from "react";

import { WordleBotProvider } from "./WordleBotContext";

const GlobalWrapper = ({ children }) => {
    return (
        <WordleBotProvider>
            {children}
        </WordleBotProvider>
    );
};

export default GlobalWrapper;
