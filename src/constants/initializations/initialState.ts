const initialState = {
    guessList: [], 
    isLoadingFlag: false,
    error: "",
    botSuggestion: "",
    guessData: {
        editFlag: true,
        input: "",
        attemptList: [],
    },
    gameCleared: {
        gameClearedFlag: false,
        gameVictoryFlag: false,
    },
};

export default initialState;
