const convertArrayToString = (inputList = []) => {
    return inputList.toString().replace(/,/g, "");
};

export default convertArrayToString;
