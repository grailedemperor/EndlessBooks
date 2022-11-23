import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from "./BookCard";
import projImg1 from "../assets/img/project-img1.png";

const Home = () => {
  const books = [
    {
      title: "How to Control Your DOM",
      author: "Matt Banz",
      imgUrl: projImg1,
      year: 1998,
    },
    {
      title: "How to Control Your DOM",
      author: "Matt Banz",
      imgUrl: projImg1,
      year: 1998,
    },
    {
      title: "How to Control Your DOM",
      author: "Matt Banz",
      imgUrl: projImg1,
      year: 1998,
    },
    {
      title: "How to Control Your DOM",
      author: "Matt Banz",
      imgUrl: projImg1,
      year: 1998,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="home-bx" id="home">
      <Container>
        <Row className="align-items-center home-title">
          <Col xs={12} md={12} xl={12}>
            <div className="title-text">
              <h1>
                <span className="headline">A Wondrous 🌍 of Endless Books</span>
              </h1>
            </div>
            <div className="subtitle-text">
              <h3>
                {" "}
                <span className="sub-title">
                  ... where the bookworms live ...
                </span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="wow zoomIn carousel-bx">
          <div className="carousel-header">
            <span className="tagline">
              {" "}
              <h1>Currently Reading</h1>{" "}
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="carousel-subtitle">
              Here's what has got you HOOKED
            </h2>
          </div>
          <Col xs={12} md={12} xl={12}>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider "
            >
              {books.map((book, index) => {
                return <BookCard key={index} {...book} />;
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
