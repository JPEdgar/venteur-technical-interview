const initialState = {
    guessList: [], // an array specifically formatted for the api: [{word: string, clue: string}]
    isLoadingFlag: false,
    error: "",
    botSuggestion: "",
    guessData: {
        editFlag: true,
        input: "",
        attemptList: [], // an array of objects:  [{letter: string, code: string, edit: bool}]
    },
};

export default initialState;
