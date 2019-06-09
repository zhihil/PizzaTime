import styled from "styled-components";
import {
    btnPrimary,
    btnPrimaryFocusActive,
    btnPrimaryHover
} from "../../style/colors";

export const AbsoluteContent = styled.div`
    z-index: 1;
    max-width: 80%;

    /* Centers absolute element */
    position: absolute;
    left: 0;
    right: 0;
    margin: 20% auto;

    text-align: center;
    background-color: transparent;
    color: white;

    h1 {
        font-family: "Bowlby One", Tahoma, Geneva, Verdana, sans-serif;
    }

    p {
        font-weight: bold;
    }

    .btn {
        margin-top: 2rem;

        background-color: ${btnPrimary};
        border: 2px solid ${btnPrimary};

        font-weight: bold;

        &:focus:active {
            background-color: ${btnPrimaryFocusActive};
            border: 2px solid ${btnPrimaryFocusActive};
        }

        &:hover {
            background-color: ${btnPrimaryHover};
            border: 2px solid ${btnPrimaryHover};
        }
    }
`;
