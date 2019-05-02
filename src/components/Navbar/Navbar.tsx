import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";

export class NavbarComponent extends React.Component {
    public render() {
        return (
            <Navbar bg="dark" variant="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={logoImg}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/order">Order</Link>
                        <Link to="/about">About</Link>
                        <Link to="/cart">Cart</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
