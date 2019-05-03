import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
    background-color: #141414;

    .navbar-brand {
        margin-left: 1.5rem;
    }

    #basic-navbar-nav {
        height: 100%;
    }
    .navbar-nav {
        height: 100%;
    }
`;

export const StyledLink = styled(NavLink)`
    color: #f2f2f2;
    font-size: 1.5rem;

    &:hover,
    :focus {
        color: #ffe900;
        text-decoration: none;
    }

    &.current-nav {
        color: #ffe900;
    }
`;
