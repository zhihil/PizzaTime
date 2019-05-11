import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

export const CarouselCaption = styled(Carousel.Caption)`
    h1 {
        font-family: "Bowlby One", Tahoma, Geneva, Verdana, sans-serif;
    }

    p {
        font-weight: bold;
    }

    button {
        background-color: #000;
        color: #ffffff;
        border: none;

        &:hover {
            color: #ffe900;
        }
    }
`;

export const Overlay = styled.div`
    &:after {
        content: "\A";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
    }
`;
