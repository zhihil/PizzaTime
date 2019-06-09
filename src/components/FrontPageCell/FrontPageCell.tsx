import React from "react";
import { AbsoluteContent } from "./FrontPageCell.styled";

interface IFrontPageCellProps {
    img: any;
    title: string;
    body: string;
    buttonText: string;
}

export const FrontPageCell = ({
    img,
    title,
    body,
    buttonText
}: IFrontPageCellProps) => (
    <div className="col-12 col-md-6 px-0 d-inline-block position-relative">
        <AbsoluteContent>
            <h1>{title}</h1>
            <p>{body}</p>
            <button className="btn btn-primary mx-5">{buttonText}</button>
        </AbsoluteContent>
        <img className="col-12 px-0" src={img} alt="" />
    </div>
);
