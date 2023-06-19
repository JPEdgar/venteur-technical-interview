import React from "react";

import Suggestion from "./Suggestion";
import { Spinner } from "../../elements";
import { useLoadingFlag } from "../../../hooks";

const BotSuggestion = () => {
    const { isLoadingFlag } = useLoadingFlag();

    return isLoadingFlag ? (
        <Spinner />
    ) : (
        <div className="d-flex test2 p-2 suggestion-bubble gap-2">
            I suggest <Suggestion />
        </div>
    );
};

export default BotSuggestion;
