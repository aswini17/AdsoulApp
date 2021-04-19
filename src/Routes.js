import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import Page from "./Components/page";
import Next from "./Components/next";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/AdsoulApp" exact component={Page} />
                    <Route path="/next" exact component={Next} />
                </Switch>
            </Router>
        )
    }
}