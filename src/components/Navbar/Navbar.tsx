import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import { StyledLink, StyledNavbar } from "./Navbar.styled";

export class NavbarComponent extends React.Component {
    public render() {
        return (
            <StyledNavbar expand="lg">
                <Navbar.Brand>
                    <Link className="pt-logo" to="/order">
                        <>
                            {/* Mock logo constructed from <p> and <img>; remove later */}
                            <span className="logo-text" aria-hidden={true}>
                                Pizza
                            </span>
                            <img
                                src={logoImg}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Pizza Time Logo"
                            />
                            <span className="logo-text" aria-hidden={true}>
                                Time
                            </span>
                        </>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledLink className="mr-5" to="/order">
                            Order
                        </StyledLink>
                        <StyledLink className="mr-5" to="/about">
                            About
                        </StyledLink>
                        <StyledLink className="mr-5" to="/cart">
                            Cart
                        </StyledLink>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
        );
    }
}
