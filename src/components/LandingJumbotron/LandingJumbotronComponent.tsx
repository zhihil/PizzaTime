import React from "react";
import Carousel from "react-bootstrap/Carousel";
import jumboImg1 from "../../images/jumbo-1.jpeg";
import jumboImg2 from "../../images/jumbo-2.jpeg";
import jumboImg3 from "../../images/jumbo-3.jpeg";

export class LandingJumbotronComponent extends React.Component {
    public render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg1} alt="" />
                    <Carousel.Caption>
                        <h1>It's Pizza Time</h1>
                        <p>
                            Choose from dozens of handtossed pizza, crafted with
                            an authentic Italian taste
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg2} alt="" />
                    <Carousel.Caption>
                        <h1>It's Chicken Time</h1>
                        <p>
                            Choose from dozens of handtossed chicken, crafted
                            with an authentic Italian taste
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg3} alt="" />
                    <Carousel.Caption>
                        <h1>It's Beer Time</h1>
                        <p>
                            Choose from dozens of handtossed alcohols, crafted
                            with an authentic Italian taste
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
