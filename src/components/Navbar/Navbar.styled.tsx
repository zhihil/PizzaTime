import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
    background-color: #141414;
    height: auto;

    .pt-logo {
        /* To remove */
        font-size: 24px;
        color: #ffe900;
    }
`;

export const StyledLink = styled(Link)`
    color: #f2f2f2;
    font-size: 1.5rem;
    border-bottom: 0.3rem solid #141414;

    &:hover {
        color: #ffe900;
        text-decoration: none;
        border-bottom: 0.3rem solid #ffe900;
    }
`;
