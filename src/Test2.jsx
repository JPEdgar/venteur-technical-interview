import React, { useState, useEffect } from "react";

import axios from "axios";

// import { fetchWordleResult } from "./api/api";
// import { sendWord } from "./actions/wordleBotActions";
import { useSendWord } from "./hooks";

const Test = () => {
    // const [temp, setTemp] = useState(null);
    // const [error, setError] = useState("");
    const {sendWord} = useSendWord()

    const URL = "https://interviewing.venteur.co/api/wordle";

    // word was "maybe"
    const testReq = [
        // {
        //     word: "serai",
        //     clue: "xyxyx", // g = green, y = yellow, x = gray
        // },
        // {
        //     word: "lawed",
        //     clue: "xgxyx",
        // },
        // {
        //     word: "mange",
        //     clue: "ggxxg",
        // },
        // {
        //     word: "mache",
        //     clue: "ggxxg",
        // },
        // {
        //     word: "matte",
        //     clue: "ggxxg",
        // },
        // {
        //     word: "mauve",
        //     clue: "ggxxg",
        // },
    ];

    const Test =  () => {
        // setError(null);
        // try {
        //     const response = await axios.post(URL, testReq);
        //     setTemp(response.data);
        // } catch (error) {
        //     console.log(error.response);
        //     setError(error.response.data)
        // }
        // const result = await fetchWordleResult(testReq);

        // const result = 
         sendWord(testReq)
        // setTemp(result);
    };

    // useEffect(() => {
    //     console.log("temp = ", temp);
    // }, [temp]);

    return (
        <>
            <button onClick={() => Test()}>Test</button>
            {/* {error && <h3>{error}</h3>} */}
        </>
    );
};

export default Test;
