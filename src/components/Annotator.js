import {Container, Typography} from "@material-ui/core";
import Window from "./Window";
import React from "react";

class Annotator extends React.Component {

    state = {
        plays: undefined,
        error: undefined
    };

    // When mounted, tries to get the list of plays.
    // Renders sidebar if OK, otherwise shows error.
    componentDidMount() {
        let user = this.props.location.pathname.split("/")[2];
        fetch(`https://script-annotator.herokuapp.com/plays/${user}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(result => result.json())
            .then(result => this.setState({plays: result.plays}))
            .catch(error => {
                console.error(error);
                this.setState({error: error.message})
            })
    }

    render() {

        let user = this.props.location.pathname.split("/")[2];
        return(
                <Container>
                    <Typography component='h1' variant='h2' align='center' gutterBottom>Annotation tool for
                        Shakespeare's plays</Typography>
                    {
                        user !== undefined && this.state.plays === undefined && <p>Loading plays...</p>
                    }
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                    {
                        user !== undefined && this.state.plays !== undefined && <Window user={user} plays={this.state.plays}/>
                    }
                </Container>
        )
    }
}

export default Annotator;