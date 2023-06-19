import React from "react";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import GuessForm from "./components/GuessForm";

// https://brandeps.com/logo-download/W/Wordle-logo-vector-01.svg
// <i class="fa-solid fa-robot"></i>

const App = () => {
    return (
        <>
            <div className="d-block d-sm-none">xs</div>
            <div className="d-none d-sm-block d-md-none">sm</div>
            <div className="d-none d-md-block d-lg-none">md</div>
            <div className="d-none d-lg-block d-xl-none">lg</div>
            <div className="d-none d-xl-block">xl</div>
            <Container className="mt-1">
                <Header />
                <GuessForm />
            </Container>
        </>
    );
};

export default App;
