const createColorList = () => {
    const returnList = [];
    for (let i = 0; i < 5; i++) {
        returnList.push({ index: i, letter: "" });
    }
    return returnList;
};

export default createColorList;
