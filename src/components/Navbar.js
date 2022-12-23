import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();	
  const setCurrentUser = useSetCurrentUser();

const { expanded, setExpanded, ref } = useClickOutsideToggle();

const handleSignOut = async () => {
  try {
    await axios.post("dj-rest-auth/logout/");
    setCurrentUser(null);
    removeTokenTimestamp();
  } catch (err) {
    // console.log(err);
  }
};

const addPostIcon = (
<NavLink
className={styles.NavLink} 
activeClassName={styles.Active} 
to="/posts/create">
<i className="fas fa-plus-square"></i> 
Add a post
</NavLink>
);

const loggedInIcons = 
<>

<NavLink
className={styles.NavLink} 
activeClassName={styles.Active} 
to="/feed"
>
<i className="fas fa-stream">
</i> Feed
</NavLink>

<NavLink
className={styles.NavLink} 
activeClassName={styles.Active} 
to="/liked"
>
<i className="fas fa-heart">
</i> Liked
</NavLink>

<NavLink 
className={styles.NavLink} 
to="/" onClick={handleSignOut}>
<i className="fas fa-sign-out-alt"></i>Sign out
</NavLink>
<Avatar src={currentUser?.profile_image} text="Profile" height={40} />
</>;

const loggedOutIcons = <>

<NavLink
className={styles.NavLink} 
activeClassName={styles.Active} to="/signin">
<i className="fas fa-sign-in-alt">
</i> Sign in
</NavLink>

<NavLink
className={styles.NavLink} 
activeClassName={styles.Active} 
to="/signup">
<i className="fas fa-user-plus">
</i> Sign up
</NavLink>
</>

return (
    <Navbar 
    expanded={expanded} 
    className={styles.NavBar} 
    expand="md" 
    fixed="top"
    >
      <Container>

        <NavLink to="/">
        <Navbar.Brand className={styles.H1}
        >THE METAL BLOG<img src={logo} alt='logo' height="30"></img> 
        </Navbar.Brand>
        </NavLink>

        {currentUser && addPostIcon}

        <Navbar.Toggle 
        onClick={() => setExpanded(!expanded)} 
        aria-controls="basic-navbar-nav" 
        ref={ref}
        />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto text-left">
            <NavLink 
            exact 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/"
            >
            <i className="fas fa-guitar">
            </i> Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;