// [{clue: "xxxxx", word: "-----"}] // clue can be x, y, or g; - is any letter a-z
//     guessData: {
//         editFlag: true,
//         input: "",
//         attemptList: [], // an array of objects:  [{letter: string, code: string, edit: bool}]

//         greenList: [], // an array of objects with the "g" code:  [{index: int, letter: string}]
//         yellowList: [], // an array of objects with the "y" code:  [{index: int, letter: string}]
//         blackList: "",  // a string of letters with the "x" code

//     },

const createColorList = () => {
    const returnList = [];
    for (let i = 0; i < 5; i++) {
        returnList.push({ index: i, letter: "" });
    }
    return returnList;
};

const getHistoryLetter = (greenListObj, yellowListObj, blackList, attemptObject) => {
    if (greenListObj.letter === attemptObject.letter)
        return "g"; // already in green list at this index
    else if (yellowListObj.letter.includes(attemptObject.letter))
        return "y"; // already in yellow list at this index
    else if (blackList.includes(attemptObject.letter)) return "x"; // already in blacklist
    else return ""; // not in list at this index
};

const createSuggestionHistory = (data) => {
    // console.log(data);
    const { attemptList } = data;
    const greenList = createColorList(); // an array of objects with the "g" code:  [{index: int, letter: string}]
    const yellowList = createColorList(); // an array of objects with the "y" code:  [{index: int, letter: string}]
    let blackList = ""; // a string of letters with the "x" code

    // cycle through attemptList...
    for (let i = 0; i < attemptList.length; i++) {
        // cycle through each attempt...
        for (let j = 0; j < attemptList[i].length; j++) {
            const attemptObject = attemptList[i][j]; // {letter: string, code: string, edit: bool}

            const greenListObj = greenList.find((x) => x.index === j); // {index: int, letter: string}
            const yellowListObj = yellowList.find((x) => x.index === j); // {index: int, letter: string}

            const historyLetter = getHistoryLetter(
                greenListObj,
                yellowListObj,
                blackList,
                attemptObject
            );

            // console.log("historyLetter for ", attemptObject)
            // console.log(historyLetter)
            // now that we have the history of this index, it's time to compare the attemptObject
            // already in greenList
            if (historyLetter === "g") {
                //
            }
            // already in yellowList
            else if (historyLetter === "y") {
                //
            }
            // already in blackList
            else if (historyLetter === "x") {
                //
            }
            // add data to a list
            else {
                if (attemptObject.code === "g")
                    greenList[j] = { index: j, letter: attemptObject.letter };
                else if (attemptObject.code === "y") {
                    const addedLetter = yellowList[j].letter + attemptObject.letter;
                    yellowList[j] = { index: j, letter: addedLetter };
                } else if (attemptObject.code === "x") {
                    blackList += attemptObject.letter;
                }
            }
        }
    }

    // console.log({ greenList, yellowList, blackList });
    return { greenList, yellowList, blackList };
};

export default createSuggestionHistory;
