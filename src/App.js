import React, {Component} from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Annotator from "./components/Annotator";
import HomePage from "./components/HomePage"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {ProtectedRoute} from "./components/ProtectedRoute";
import Login from "./components/Login";

class App extends Component {

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Button href="/" color="inherit">Home</Button>
                        <Button href="/project" color="inherit">Project</Button>
                    </Toolbar>
                </AppBar>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={Login}/>
                        <ProtectedRoute path="/project" component={Annotator}/>
                    </Switch>
                </BrowserRouter>
            </>);
    }
}

export default App;
