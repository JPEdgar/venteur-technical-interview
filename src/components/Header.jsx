import React from "react";

import { Image, Row, Col } from "react-bootstrap";

import bot from "../images/bot.svg";

const Header = () => {
    return (
        // <Row className="align-items-center w-100">
        //     <Col xs={12} md={5} className="d-flex justify-content-center justify-content-md-end">
        //         <Image src={bot} height={75} className="bot-icon" />
        //     </Col>
        //     <Col xs={12} md={7} className="d-flex justify-content-center justify-content-md-start">
        //         <div className="bot-header">Wordle Bot</div>
        //     </Col>
        // </Row>
        <div className="bot-header justify-content-center">Wordle Bot</div>
    );
};

export default Header;
