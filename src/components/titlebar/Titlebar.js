import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";

const Titlebar = () => {
  return (
    <Navbar className="shadow bg-white rounded" expand="lg" bg="light">
      <Container className="justify-content-md-center">
        <Image src="assets/final_logo.gif" alt="Logo" />
      </Container>
    </Navbar>
  );
};

export default Titlebar;
