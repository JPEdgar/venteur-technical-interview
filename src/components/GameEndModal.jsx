import React from "react";

import { Modal, Button } from "react-bootstrap";
import Confetti from "react-confetti";

import { useGameStatus } from "../hooks";

const GameEndModal = () => {
    const { gameStatus , resetGame} = useGameStatus();

    const windowSize = { width: window.innerWidth, height: window.innerHeight };

    // gameCleared: {
    //     gameClearedFlag: false,
    //     gameVictoryFlag: false,
    // },

    const handleReset = () => {
        resetGame()
    }

    const handleBack = () => {
        //
    }

    return (
        <>
            {gameStatus.gameClearedFlag && (
                <Confetti width={windowSize.width} height={windowSize.height} />
            )}
            <Modal size="lg" centered show={gameStatus.gameClearedFlag}>
                <Modal.Header>
                    <Modal.Title>VICTORY!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Great job!</h4>
                </Modal.Body>
                <Modal.Footer >
                    <Button onClick={() => handleBack()}>Back</Button>
                    <Button onClick={() => handleReset()}>Reset</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default GameEndModal;
