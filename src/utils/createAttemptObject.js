const createAttemptObject = (attempt) => {
    const returnList = [];
    const attemptList = attempt.split("");
    for (let i = 0; i < attemptList.length; i++) {
        returnList.push({ letter: attemptList[i], code: "x", edit: false });
    }
    return returnList;
};

export default createAttemptObject;
