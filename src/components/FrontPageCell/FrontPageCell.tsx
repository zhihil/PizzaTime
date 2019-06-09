import React from "react";

interface IFrontPageCellProps {
    img: any;
}

export const FrontPageCell = ({ img }: IFrontPageCellProps) => (
    <img src={img} className="col-12 col-md-6 px-0" alt="" />
);
