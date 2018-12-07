import * as React from "react";
import {Container} from 'reactstrap';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header/Header";

import HomePage from "./Pages/HomePage/HomePage";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

export default class Root extends React.Component{
    render(){
        return (
            <div className="website">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Container className="websiteContainer">
                            <Switch>
                                <Route path="/" component={HomePage} />
                                <Route path="/portfolio" component={PortfolioPage} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </Container>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}