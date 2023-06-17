import convertArrayToString from "./convertArrayToString";

const prepareGuessForSuggestion = (guessData) => {
    let letterArray = [];
    let codeArray = [];
    const returnArray = [];
    const { attemptList } = guessData;
    for (let i = 0; i < attemptList.length; i++) {
        for (let j = 0; j < attemptList[i].length; j++) {
            letterArray.push(attemptList[i][j].letter);
            codeArray.push(attemptList[i][j].code);
        }
        const word = convertArrayToString(letterArray);
        const clue = convertArrayToString(codeArray);
        returnArray.push({ word, clue });
        letterArray = [];
        codeArray = [];
    }
    return returnArray;
};

export default prepareGuessForSuggestion;
