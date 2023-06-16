import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";

const useErrorMessage = () => {
    const { state } = useWordleBotContext();

    const errorMessage = () => {
        return state.error;
    };

    return { errorMessage };
};

export default useErrorMessage;
