import * as api from "../api/api";

const sendWord = async (request) => {
    try {
        const data = await api.fetchWordleResult(request);
        // console.log("data = ");
        // console.log(data);
        return data;
    } catch (error) {
        // console.log("error = ");
        // console.log(error.message);
        return error;
    }
};

export { sendWord };
