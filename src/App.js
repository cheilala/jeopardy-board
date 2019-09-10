import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <Container className="app-container">
      <Jumbotron>
        <h1 className="header">This is Jeopardy!</h1>
      </Jumbotron>
      <Container>
        <CategoryList />
      </Container>
    </Container>
  );
}

export default App;