const initialState = {
    guessList: [], // [{word: string, clue: string}]
    isLoadingFlag: false,
    error: "",
    botSuggestion: "",
    guessData: { editFlag: true, input: "", attemptList: [] },
};

export default initialState;
