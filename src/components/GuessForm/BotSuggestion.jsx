import React from "react";

import {Spinner} from "../elements";
import { useSuggestedWord, useLoadingFlag } from "../../hooks";

const BotSuggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const { isLoadingFlag } = useLoadingFlag();
    return isLoadingFlag ? <Spinner /> : <div>I suggest {suggestedWord}</div>;
};

export default BotSuggestion;
