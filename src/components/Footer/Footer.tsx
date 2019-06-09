import React from "react";
import styled from "styled-components";
import { backgroundColor, fontColor } from "../../style/colors";

const FooterContainer = styled.div`
    background-color: ${backgroundColor};
    color: ${fontColor};
    height: 100px;
`;

export const Footer = () => <FooterContainer />;
