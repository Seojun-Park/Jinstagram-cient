import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Routes/Home'
import AuthHome from '../Routes/AuthHome'
import Profile from '../Routes/Profile'
import Chat from '../Routes/Chat'

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:username" component={Profile} />
        <Route path="/chat/:chatId" component={Chat} />
        {/* <Redirect from="*" to="/" /> */}
    </Switch>
)

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        {/* <Redirect from="*" to="/" /> */}
    </Switch>
)

const AppRouter = ({ isLoggedIn }: any) => {
    return (
        <BrowserRouter basename={"/Jinstagram-client/"}>
            {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </BrowserRouter>
    )
}

export default AppRouter;