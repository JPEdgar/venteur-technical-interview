import React from "react";

import EditCluesRow from "./EditCluesRow";

import { createId } from "../../../utils";
import { useGuessData } from "../../../hooks";

console.log("get data here");

const EditClues = () => {
    const { guessData } = useGuessData();
    return (
        <>
            {guessData.attemptList.length > 0 &&
                guessData.attemptList.map((attempListData: [], attempListIndex: number) => (
                    <EditCluesRow key={createId()} data={attempListData} index={attempListIndex} />
                ))}
        </>
    );
};

export default EditClues;
