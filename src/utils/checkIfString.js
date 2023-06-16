const checkIfString = (input) => {
    if (typeof input === "string") {
        const regExp = /^[A-Za-z]+$/;
        if (input.match(regExp)) return true;
        else return false;
    } else return false;
};

export default checkIfString;
