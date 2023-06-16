import WORDLEBOT_TYPES from "../constants/types/wordleBotTypes";

const wordleBotReducer = (state = {}, action) => {
    switch (action.type) {
        case WORDLEBOT_TYPES.SEND_REQUEST:
            return { ...state, isLoadingFlag: false, error: "" };
        default:
            return state;
    }
};

export default wordleBotReducer;
