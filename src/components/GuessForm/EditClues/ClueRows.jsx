import React from "react";

import { Row, Col, Container } from "react-bootstrap";

import {
    LetterButton, 
    EditLetterInput, 
    LockedLetterButton,
} from "../../elements";
import { useGuessData } from "../../../hooks";
import { createId } from "../../../utils";

const ClueRows = ({ data, index }) => {
    const { guessData } = useGuessData();
    return (
        <>
            <Container>
                <Row className="justify-content-evenly">
                    <Col sm={1} />
                    {data.map((letterData, letterIndex) =>
                        letterData.edit ? (
                            <Col key={createId()} xs={2}>
                                <EditLetterInput
                                    letterObj={letterData}
                                    attemptListIndex={index}
                                    letterObjectIndex={letterIndex}
                                />
                            </Col>
                        ) : guessData.attemptList.length === index + 1 ? (
                            <Col key={createId()} xs={2} className="p-0 m-0">
                                <LetterButton
                                    attemptListIndex={index}
                                    letterObjectIndex={letterIndex}
                                    letterObject={letterData}
                                />
                            </Col>
                        ) : (
                            <Col key={createId()} xs={2}>
                                <LockedLetterButton letterObject={letterData} />
                            </Col>
                        )
                    )}
                    <Col sm={1} />
                </Row>
            </Container>
        </>
    );
};

export default ClueRows;
