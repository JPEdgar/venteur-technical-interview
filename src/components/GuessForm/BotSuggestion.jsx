import React from "react";

import {Spinner} from "react-bootstrap"

import { useSuggestedWord, useLoadingFlag } from "../../hooks";

const BotSuggestion = () => {
    const { suggestedWord } = useSuggestedWord();
    const {isLoadingFlag} = useLoadingFlag()
    return isLoadingFlag ?  <Spinner animation="border" /> : <div>I suggest {suggestedWord}</div>;
};

export default BotSuggestion;
