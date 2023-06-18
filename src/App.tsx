import React from "react";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import GuessForm from "./components/GuessForm";

// https://brandeps.com/logo-download/W/Wordle-logo-vector-01.svg
// <i class="fa-solid fa-robot"></i>

const App = () => {
    return (
        <>
            <Container style={{ height: "100vh", backgroundColor: "cyan2" }}>
                <Header />
                <GuessForm />
            </Container>
        </>
    );
};

export default App;
