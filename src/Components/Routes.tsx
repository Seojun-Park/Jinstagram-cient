import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Routes/Home'
import AuthHome from '../Routes/AuthHome'
import Profile from '../Routes/Profile'

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:username" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
)

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        <Redirect from="*" to="/" />
    </Switch>
)

const AppRouter = ({ isLoggedIn }: any) => {
    return (
        <BrowserRouter>
            {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </BrowserRouter>
    )
}

export default AppRouter