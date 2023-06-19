import React from "react";

import { Image, Stack } from "react-bootstrap";

import Bot from "./Bot";
import GuessInput from "./GuessInput";
import EditClues from "./EditClues";
import botImage from "../../images/bot.svg";

const GuessForm = () => {
    return (
        <>
            <EditClues />
            <Stack direction="horizontal">
                <Image src={botImage} height="100px" />
                <div  className="w-100">
                    <Bot />
                    <GuessInput />
                </div>
            </Stack>
        </>
    );
};

export default GuessForm;
