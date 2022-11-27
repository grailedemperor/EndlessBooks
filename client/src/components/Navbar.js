import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/img/library.svg";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import book from "../assets/img/book.svg";
import { WonderousContex } from "../utils/context";

const NavBar = () => {
  const { authState, setAuthState } = useContext(WonderousContex);
  const [activeLink, setActiveLink] = useState("home");

  const [scrolled, seScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const logout = () => {
    setAuthState({ token: "", user: {} });
    navigate("/login");
  };

  const getNavClasses = (key) => {
    let result = "navbar-link navi text-white";

    if (activeLink === key) {
      result = `${result} active`;
    }

    return result;
  };

  const showLoginLogout = () => {
    if (!authState?.token?.length) {
      return (
        <NavLink
          to="/"
          className={getNavClasses("login")}
          onClick={() => onUpdateActiveLink("login")}
        >
          <Stack direction="horizontal" gap={1}>
            Login <img className="book" src={book} alt="book" />
          </Stack>
        </NavLink>
      );
    }

    return (
      <NavLink
        to="/"
        className={getNavClasses("logout")}
        onClick={() => onUpdateActiveLink("logout")}
      >
        <Stack direction="horizontal" gap={1}>
          Logout <img className="book" src={book} alt="book" />
        </Stack>
      </NavLink>
    );
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className="text-white">
        <Navbar.Brand>
          <NavLink to="/">
            <img className="lib-logo" src={logo} alt="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Stack direction="horizontal" gap={1}>
            <span className="navbar-toggler-icon"></span>
          </Stack>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li>{showLoginLogout()}</li>
            <li>
              <NavLink
                to="/register"
                className={getNavClasses("register")}
                onClick={() => onUpdateActiveLink("register")}
              >
                <Stack direction="horizontal" gap={1}>
                  Register <img className="book" src={book} alt="book" />
                </Stack>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className={getNavClasses("home")}
                onClick={() => onUpdateActiveLink("home")}
              >
                <Stack direction="horizontal" gap={1}>
                  Home <img className="book" src={book} alt="book" />
                </Stack>
              </NavLink>
            </li>
            <li>
              {/* fix blocked text for book search */}
              <NavLink
                to="/booksearch"
                className={getNavClasses("booksearcch")}
                onClick={() => onUpdateActiveLink("booksearch")}
              >
                <Stack direction="horizontal" gap={1}>
                  Book Search <img className="book" src={book} alt="book" />
                </Stack>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tbr"
                className={getNavClasses("tbr")}
                onClick={() => onUpdateActiveLink("tbr")}
              >
                <Stack direction="horizontal" gap={1}>
                  TBR <img className="book" src={book} alt="book" />
                </Stack>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/library"
                className={getNavClasses("library")}
                onClick={() => onUpdateActiveLink("library")}
              >
                <Stack direction="horizontal" gap={1}>
                  Library <img className="book" src={book} alt="book" />
                </Stack>
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
