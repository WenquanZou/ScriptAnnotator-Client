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
        fetch('https://script-annotator.herokuapp.com//plays', {
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
        return(
                <Container>
                    <Typography component='h1' variant='h2' align='center' gutterBottom>Annotation tool for
                        Shakespeare's plays</Typography>
                    {
                        this.state.plays === undefined && <p>Loading plays...</p>
                    }
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                    {
                        this.state.plays !== undefined && <Window plays={this.state.plays}/>
                    }
                </Container>
        )
    }
}

export default Annotator;