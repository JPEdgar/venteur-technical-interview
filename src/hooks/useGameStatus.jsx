import React from "react";

import useWordleBotContext from "./context/useWordleBotContext";
import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

import { sendWord } from "../actions/wordleBotActions";

const useGameStatus = () => {
    const { state, dispatch } = useWordleBotContext();

    const victory = () => {
        dispatch({ type: WORDLEBOT_TYPES.GAME_VICTORY });
    };

    const goBack = () => {
        //
    };

    const resetGame = async () => {
        dispatch({ type: WORDLEBOT_TYPES.RESET_GAME });
        const word = await sendWord([]);
        console.log(word)
        dispatch({ type: WORDLEBOT_TYPES.SET_BOT_SUGGESTION, payload: word });
    };

    const gameStatus = state.gameCleared;

    return { victory, gameStatus, resetGame };
};

export default useGameStatus;
