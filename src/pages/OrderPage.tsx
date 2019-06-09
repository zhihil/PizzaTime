import React from "react";
import Helmet from "react-helmet";
import { FrontPageCell } from "../components/FrontPageCell/FrontPageCell";
import { LandingJumbotronComponent } from "../components/LandingJumbotron/LandingJumbotronComponent";

export class OrderPage extends React.Component {
    public render() {
        return (
            <>
                <Helmet>
                    <title>PizzaTime Home Page</title>
                </Helmet>
                <LandingJumbotronComponent />
                <FrontPageCell img={require("../images/group-discount.jpg")} />
                <FrontPageCell img={require("../images/group-discount.jpg")} />
                <FrontPageCell img={require("../images/group-discount.jpg")} />
                <FrontPageCell img={require("../images/group-discount.jpg")} />
            </>
        );
    }
}
