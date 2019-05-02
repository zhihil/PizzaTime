import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { CartPage } from "../pages/CardPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { OrderPage } from "../pages/OrderPage";
import { NavbarComponent } from "./Navbar/Navbar";

export class App extends React.Component {
    public render() {
        return (
            <>
                <NavbarComponent />
                <Switch>
                    <Route exact={true} path="/order" component={OrderPage} />
                    <Route exact={true} path="/about" component={AboutPage} />
                    <Route exact={true} path="/cart" component={CartPage} />
                    <Redirect exact={true} from="/" to="/order" />
                    <Route component={NotFoundPage} />
                </Switch>
            </>
        );
    }
}
