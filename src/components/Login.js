import React from "react";
import Container from "@material-ui/core/Container";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import auth from "./Authentication";

class Login extends React.Component {
    state = {
        user: undefined
    };

    login = () => {
        // fetch(`https://script-annotator.herokuapp.com/auth/${this.state.user}`, {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // })
        //     .then(result => result.json())
        //     .then(({isAuthed}) => {
        //         if (isAuthed)
        //             auth.login(()=> {
        //                 this.props.history.push("/project")
        //             })
        //     })
        //     .catch(console.error);
        auth.login(() => {

            this.props.history.push(`/project/${this.state.user}`)
        });

    };

    recordUser = event => {
        this.setState({user: event.target.value})
    };

    render() {
        return (
            <Container>
                <TextField id="standard-full-width" placeholder="Annotate"
                           onChange={this.recordUser.bind(this)}/>
                <Button disabled={this.state.user === undefined} onClick={this.login.bind(this)}>Submit</Button>
            </Container>
        );
    }
}

export default Login;