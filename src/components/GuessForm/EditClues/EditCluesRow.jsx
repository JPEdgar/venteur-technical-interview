import React from "react";

import { Col, Card, Container } from "react-bootstrap";

import ClueRows from "./ClueRows";
import {
    BackButton, 
    SubmitButton, 
} from "../../elements";
import { useGoBack, useGuessData, useSendWord, useGameStatus } from "../../../hooks";
import { prepareGuessForSuggestion } from "../../../utils";

const EditCluesRow = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { guessData } = useGuessData();
    const { sendWord } = useSendWord();
    const { victory } = useGameStatus();

    const handleBack = () => {
        goBack();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const wordList = prepareGuessForSuggestion(guessData);
        const listLength = wordList.length - 1;

        if (wordList[listLength].clue === "ggggg") {
            victory();
        } else sendWord(wordList);
    };

    return (
        <>
            <Card className="p-1 pb-2 my-1">
                <Container>
                    <div className="d-block d-md-flex w-100 justify-content-center">
                        {guessData.attemptList.length === index + 1 ? (
                            <Col className="d-none d-md-flex" xs={12} md={2}>
                                <div className="d-flex w-100 align-items-center">
                                    <BackButton handleBack={handleBack} />
                                </div>
                            </Col>
                        ) : (
                            <Col xs={12} md={2} className="d-flex align-items-center">
                                Guess {index + 1}
                            </Col>
                        )}
                        <Col xs={12} md={7}>
                            <ClueRows data={data} index={index} />
                        </Col>

                        {guessData.attemptList.length === index + 1 && (
                            <Col className="d-flex" xs={12} md={2}>
                                <div className="w-100 d-flex align-items-center d-md-none">
                                    <BackButton handleBack={handleBack} />
                                </div>
                                <div className="w-100 d-flex align-items-center">
                                    <SubmitButton handleSubmit={handleSubmit} />
                                </div>
                            </Col>
                        )}
                    </div>
                </Container>
            </Card>
        </>
    );
};

export default EditCluesRow;
