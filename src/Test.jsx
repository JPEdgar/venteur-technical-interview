import React, { useState, useEffect } from "react";

import axios from "axios";

const Test = () => {
    const [temp, setTemp] = useState(null);

    const URL = "https://interviewing.venteur.co/api/wordle";

    const testReq = [
        {
            word: "serai",
            clue: "gxyxx", // g = green, y = yellow, x = gray
        },
    ];

    const Test = async () => {
        try {
            const response = await axios.post(URL, testReq);
            setTemp(response.data);
        } catch (error) {
            console.log("error => ", error);
        }
    };

    useEffect(() => {
        console.log("temp = ", temp);
    }, [temp]);

    return (
        <>
            <button onClick={() => Test()}>Test</button>
        </>
    );
};

export default Test;
