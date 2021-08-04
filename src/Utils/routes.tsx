import { Route, Switch } from "react-router-dom";
import Account from "../Components/Account/Account";
import Profile from "../Components/Account/Profile";
import User from "../Components/Account/User";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path={`/account`}>
                    <Account />
                </Route>
                <Route exact path={`/account/user`}>
                    <User />
                </Route>
                <Route exact path={`/account/profile`}>
                    <Profile />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;