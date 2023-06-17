import React from "react";

import { Spinner } from "../elements";
import { useSuggestedWord, useLoadingFlag } from "../../hooks";

const BotSuggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();
    return isLoadingFlag ? (
        <Spinner />
    ) : (
        <div>
            I suggest <span className="fs-3 text-uppercase">{suggestedWord}</span>
        </div>
    );
};

export default BotSuggestion;
