import React from "react";

import Suggestion from "./Suggestion";
import { Spinner } from "../../elements";
import { useLoadingFlag } from "../../../hooks";

const BotSuggestion = () => {
    const { isLoadingFlag } = useLoadingFlag();

    return isLoadingFlag ? (
        <Spinner />
    ) : (
        <div>
            I suggest <Suggestion />
        </div>
    );
};

export default BotSuggestion;
