import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/library.svg";
import { NavLink } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <NavLink to="/">
              <img className="lib-logo" src={logo} alt="logo" />
            </NavLink>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
