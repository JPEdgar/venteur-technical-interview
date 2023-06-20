import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";

const useLoadingFlag = () => {
    const { state } = useWordleBotContext();

    const isLoadingFlag = state.isLoadingFlag;

    return { isLoadingFlag };
};

export default useLoadingFlag;
