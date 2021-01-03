import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Routes/Home'
import AuthHome from '../Routes/AuthHome'
import SocialLogin from '../Routes/SocialLogin'

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
    </Switch>
)

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={AuthHome} />
        <Route path="/socialLogin" component={SocialLogin} />
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