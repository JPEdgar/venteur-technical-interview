import { createColorList } from "../../utils";

const initialState = {
    guessList: [], // an array specifically formatted for the api: [{word: string, clue: string}]
    isLoadingFlag: false,
    error: "",
    botSuggestion: "",
    guessData: {
        editFlag: true,
        input: "",
        attemptList: [], // an array of objects:  [{letter: string, code: string, edit: bool}]
        greenList: createColorList(), // an array of objects with the "g" code:  [{index: int, letter: string}]
        yellowList: createColorList(), // an array of objects with the "y" code:  [{index: int, letter: string}]
        blackList: "", // a string of letters with the "x" code
    },
};

export default initialState;
