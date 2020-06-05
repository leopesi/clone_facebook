
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Feed from './pages/Feed/Feed';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Home />} />
            <Route exact path="/cadastro" component={ () => <Signup />} />
            <Route exact path="/feed" component={ () => <Feed />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
