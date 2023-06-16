import React, { useState, useEffect } from "react";

import axios from "axios";

import { fetchWordleResult } from "./api/api";

const Test = () => {
    const [temp, setTemp] = useState(null);
    const [error, setError] = useState("");

    const URL = "https://interviewing.venteur.co/api/wordle";

    // word was "maybe"
    const testReq = [
        {
            word: "serai",
            clue: "xyxyx", // g = green, y = yellow, x = gray
        },
        {
            word: "lawed",
            clue: "xgxyx",
        },
        {
            word: "mange",
            clue: "ggxxg",
        },
        {
            word: "mache",
            clue: "ggxxg",
        },
        {
            word: "matte",
            clue: "ggxxg",
        },
        // {
        //     word: "mauve",
        //     clue: "ggxxg",
        // },
    ];

    const Test = async () => {
        setError(null);
        // try {
        //     const response = await axios.post(URL, testReq);
        //     setTemp(response.data);
        // } catch (error) {
        //     console.log(error.response);
        //     setError(error.response.data)
        // }
        const result = await fetchWordleResult(testReq);
        setTemp(result);
    };

    useEffect(() => {
        console.log("temp = ", temp);
    }, [temp]);

    return (
        <>
            <button onClick={() => Test()}>Test</button>
            {error && <h3>{error}</h3>}
        </>
    );
};

export default Test;
