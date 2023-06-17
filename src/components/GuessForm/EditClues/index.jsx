import React from "react";

import EditCluesRow from "./EditCluesRow";

import { createId } from "../../../utils";
import { useGuessData } from "../../../hooks";

const EditClues = () => {
    const { guessData } = useGuessData();
    return (
        guessData.attemptList.length > 0 &&
        guessData.attemptList.map((attempListData, attempListIndex) => (
            <EditCluesRow key={createId()} data={attempListData} index={attempListIndex} />
        ))
    );
};

export default EditClues;
