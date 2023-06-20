import { useContext } from "react";

import { WordleBotContext } from "../../context/WordleBotContext";

const useWordleBotContext = () => {
    const context = useContext(WordleBotContext);

    if (!context) throw Error("Context error - useWordleBotContext out-of-scope.");

    return context;
};

export default useWordleBotContext;
