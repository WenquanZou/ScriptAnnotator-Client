import React, {Component} from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Annotator from "./components/Annotator";

class App extends Component {

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Project</Button>
                    </Toolbar>
                </AppBar>
                <Annotator/>
            </>
        );
    }
}

export default App;
