import React from "react";

import { Container } from "react-bootstrap";

import Header from "./components/Header";
import GuessForm from "./components/GuessForm";
import Footer from "./components/Footer";
import GameEndModal from "./components/GameEndModal";

const App = () => {
    return (
        <>
            <Container className="mt-1">
                <GameEndModal />
                <Header />
                <GuessForm />
                <Footer />
            </Container>
        </>
    );
};

export default App;
