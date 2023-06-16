import React from "react";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Test from "./Test";

// https://brandeps.com/logo-download/W/Wordle-logo-vector-01.svg
// <i class="fa-solid fa-robot"></i>

const App = () => {
    return (
        <Container style={{ backgroundColor: "green", height: "100vh" }}>
            <Header />
            {/* <Test/> */}
        </Container>
    );
};

export default App;
