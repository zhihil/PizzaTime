import React from "react";
import Carousel from "react-bootstrap/Carousel";
import jumboImg1 from "../../images/jumbo-1.png";
import jumboImg2 from "../../images/jumbo-2.png";
import jumboImg3 from "../../images/jumbo-3.png";
import { CarouselCaption } from "./LandingJumbotron.styled";

export class LandingJumbotronComponent extends React.Component {
    public render() {
        return (
            <Carousel fade={true}>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg1} alt="" />
                    <CarouselCaption className="mb-4">
                        <h1>It's Pizza Time</h1>
                        <p>
                            Choose from dozens of handtossed pizza, crafted with
                            an authentic Italian taste
                        </p>
                        <button className="btn mr-1">Order</button>
                        <button className="btn">Continue Previous Order</button>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg2} alt="" />
                    <CarouselCaption className="mb-4">
                        <h1>It's Chicken Time</h1>
                        <p>
                            Choose from dozens of handtossed chicken, crafted
                            with an authentic Italian taste
                        </p>
                        <button className="btn mr-1">Order</button>
                        <button className="btn">Continue Previous Order</button>
                    </CarouselCaption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={jumboImg3} alt="" />
                    <CarouselCaption className="mb-4">
                        <h1>It's Beer Time</h1>
                        <p>
                            Choose from dozens of handtossed alcohols, crafted
                            with an authentic Italian taste
                        </p>
                        <button className="btn mr-1">Order</button>
                        <button className="btn">Continue Previous Order</button>
                    </CarouselCaption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
