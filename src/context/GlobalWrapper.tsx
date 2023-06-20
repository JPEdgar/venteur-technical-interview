import React from "react";

import { WordleBotProvider } from "./WordleBotContext";

type GlobalWrapperProps = {
    children: React.ReactNode;
};

const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
    return <WordleBotProvider>{children}</WordleBotProvider>;
};

export default GlobalWrapper;
