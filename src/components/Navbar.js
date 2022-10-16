import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png'
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>

        <Navbar.Brand className={styles.H1}
        href="#home">THE METAL BLOG<img src={logo} alt='logo' height="30"></img> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto text-left">
            <Nav.Link><i className="fas fa-guitar"></i> Home</Nav.Link>
            <Nav.Link><i className="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
            <Nav.Link><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;