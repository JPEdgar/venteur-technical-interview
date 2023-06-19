import React from "react";

import { Row, Col, Card, Container } from "react-bootstrap";

import ClueRows from "./ClueRows";
import {
    BackButton, // handleBack
    SubmitButton, // handleSubmit
} from "../../elements";
import { useGoBack, useGuessData, useSendWord } from "../../../hooks";
import { prepareGuessForSuggestion } from "../../../utils";

const EditCluesRow = ({ data, index }) => {
    const { goBack } = useGoBack();
    const { guessData } = useGuessData();
    const { sendWord } = useSendWord();

    const handleBack = () => {
        goBack();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const wordList = prepareGuessForSuggestion(guessData);
        sendWord(wordList);
    };

    return (
        <>
            <Card className="p-1 pb-2 my-1 guess-card">
                <Container className="test0">

                    
                    <div className=" d-block d-md-flex w-100 test0-5 justify-content-between">
                        {guessData.attemptList.length === index + 1 ? (
                            <Col className="d-none d-md-flex test1" xs={12} md={2}>
                                <div className="d-flex w-100 align-items-center">
                                    <BackButton handleBack={handleBack} />
                                </div>
                            </Col>
                        ) : (
                            <Col xs={12} md={2} className="d-none d-md-flex test1-5">
                                Guess {index + 1}
                            </Col>
                        )}
                        <Col xs={12} md={7} className="test2 ">
                            <ClueRows data={data} index={index} />
                        </Col>

                        {guessData.attemptList.length === index + 1 && (
                            <Col className="d-flex  test3" xs={12} md={2}>
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

// <>
// <Stack direction="horizontal" gap={2}>
//     {guessData.attemptList.length === index + 1 ? (
//         <BackButton handleBack={handleBack} />
//     ) : (
//         <div className="w-100 me-4 text-center">Guess {index + 1}</div>
//     )}
//     {data.map((letterData, letterIndex) =>
//         letterData.edit ? (
//             <EditLetterInput
//                 key={createId()}
//                 letterObj={letterData}
//                 attemptListIndex={index}
//                 letterObjectIndex={letterIndex}
//             />
//         ) : guessData.attemptList.length === index + 1 ? (
//             <LetterButton
//                 key={createId()}
//                 attemptListIndex={index}
//                 letterObjectIndex={letterIndex}
//                 letterObject={letterData}
//             />
//         ) : (
//             <LockedLetterButton key={createId()} letterObject={letterData} />
//         )
//     )}
//     {guessData.attemptList.length === index + 1 ? (
//         <SubmitButton handleSubmit={handleSubmit} />
//     ) : (
//         <div className="w-100 ms-4" />
//     )}
// </Stack>
// </>
