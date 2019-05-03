import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
    background-color: #141414;

    .navbar-brand {
        margin-left: 1.5rem;
    }

    padding: 0;
    height: 5rem;
    #basic-navbar-nav {
        height: 100%;
    }
    .navbar-nav {
        height: 100%;
    }
`;

export const StyledLink = styled(Link)`
    color: #f2f2f2;
    font-size: 1.5rem;

    border-bottom: 0.3rem solid #141414;
    margin-top: auto;
    height: 3.5rem;

    &:hover,
    :focus {
        color: #ffe900;
        text-decoration: none;
        border-bottom: 0.3rem solid #ffe900;
    }
`;
