import Main from "components/Main";
import Home from "components/User/Login/login";
import 'assets/css/styles.css';


import { BrowserRouter, Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Main" >
                    <Main />
                </Route>
                
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;