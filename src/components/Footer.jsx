import React from "react";

import { Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <Row className="footer w-100 align-items-center m-0 p-0">
            <Col xs={12} md={7} className="d-flex flex-column justify-content-flex-end">
                <div>Front end developed by:</div>
                <div className="footer-name">Jon Edgar (Jon.P.Edgar@gmail.com)</div>
            </Col>
            <Col className="d-none d-md-block fs-4" md={1}>
                |
            </Col>
            <Col xs={12} md={4}>
                <div>Back end developed by:</div>
                <div className="footer-name">Venteur.co</div>
            </Col>
        </Row>
    );
};

export default Footer;
