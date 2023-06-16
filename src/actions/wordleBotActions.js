import * as api from "../api/api";

const sendWord = async (request = []) => {
    try {
        const data = await api.fetchWordleResult(request);
        return data;
    } catch (error) {
        return error;
    }
};

export { sendWord };
