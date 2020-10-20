import NavBar from 'core/components/NavBar';
import Home from 'pages/Home'
import Search from 'pages/Search';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;