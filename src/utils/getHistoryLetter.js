const getHistoryLetter = (greenListObj, yellowListObj, blackList, attemptObject) => {
    if (greenListObj.letter === attemptObject.letter)
        return "g"; // already in green list at this index
    else if (yellowListObj.letter.includes(attemptObject.letter))
        return "y"; // already in yellow list at this index
    else if (blackList.includes(attemptObject.letter)) return "x"; // already in blacklist
    else return ""; // not in list at this index
};

export default getHistoryLetter