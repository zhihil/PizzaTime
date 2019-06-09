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
                <FrontPageCell
                    img={require("../images/group-discount.jpg")}
                    title={"Dinner Deals"}
                    body={"Get discounts with bigger groups"}
                    buttonText={"Learn More"}
                />
                <FrontPageCell
                    img={require("../images/mountain.jpg")}
                    title={"PizzaTime Contest"}
                    body={"Win a vacation to Hawaii"}
                    buttonText={"Learn More"}
                />
                <FrontPageCell
                    img={require("../images/farm.jpg")}
                    title={"Commitment to Quality"}
                    body={"Learn more about our suppliers"}
                    buttonText={"Learn More"}
                />
                <FrontPageCell
                    img={require("../images/artesanal.jpg")}
                    title={"Artesanal Pizza"}
                    body={"Unique flavours crafted by world-class chefs"}
                    buttonText={"Learn More"}
                />
            </>
        );
    }
}
