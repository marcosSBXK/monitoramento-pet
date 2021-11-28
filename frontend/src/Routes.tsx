import Main from "components/Main";
//import Home from "components/User/Login/login";
import 'assets/css/styles.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Login } from "components/User/Login/login";
import { AuthProvider } from "context/AuthProvider";
import { ProtectedLayout } from "components/ProtectedLayout";

const Routes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/main' >
                        <ProtectedLayout>                  
                                <Main />  
                        </ProtectedLayout>
                    </Route>
                </Switch>

            </BrowserRouter>
        </AuthProvider>
    );
}

export default Routes;