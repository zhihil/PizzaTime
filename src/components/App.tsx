import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CardPage";
import { LocationFormPage } from "../pages/LocationFormPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OrderPage } from "../pages/OrderPage";
import { Footer } from "./Footer/Footer";
import { NavbarComponent } from "./Navbar/Navbar";

export class App extends React.Component {
    public render() {
        return (
            <>
                <NavbarComponent />
                <Switch>
                    <Route exact={true} path="/order" component={OrderPage} />
                    <Route
                        exact={true}
                        path="/order/location"
                        component={LocationFormPage}
                    />
                    <Route exact={true} path="/about" component={AboutPage} />
                    <Route exact={true} path="/cart" component={CartPage} />
                    <Redirect exact={true} from="/" to="/order" />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </>
        );
    }
}
