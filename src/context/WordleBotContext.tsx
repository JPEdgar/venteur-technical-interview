import React, { createContext, useReducer, useEffect } from "react";

import wordleBotReducer from "../reducers/wordleBotReducer";
import initialState from "../constants/initializations/initialState";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";
import { sendWord } from "../actions/wordleBotActions";

type WordleBotProviderProps = {
    children: React.ReactNode;
};

type InitialStateType = {
    guessList: any[];
    isLoadingFlag: boolean;
    error: string;
    botSuggestion: string;
    guessData: {
        editFlag: boolean;
        input: string;
        attemptList: any[];
    };
    gameCleared: {
        gameClearedFlag: boolean;
        gameVictoryFlag: boolean;
    };
};

const WordleBotContext = createContext<{ state: InitialStateType; dispatch: React.Dispatch<any> }>({
    state: initialState,
    dispatch: () => null,
});

const WordleBotProvider = ({ children }: WordleBotProviderProps) => {
    const [state, dispatch] = useReducer(wordleBotReducer, initialState);

    useEffect(() => {
        const Initialize = async () => {
            dispatch({ type: WORDLEBOT_TYPES.SEND_REQUEST });
            const word = await sendWord([]);
            dispatch({ type: WORDLEBOT_TYPES.SET_BOT_SUGGESTION, payload: word });
        };

        Initialize();
    }, []);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <WordleBotContext.Provider value={{ state, dispatch }}>
            {children}
        </WordleBotContext.Provider>
    );
};

export { WordleBotContext, WordleBotProvider };
