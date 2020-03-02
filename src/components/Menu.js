import React, {Component} from 'react';
import {List, ListItem, ListItemText, Divider} from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from "@material-ui/core/Tooltip";
import withStyles from "@material-ui/core/styles/withStyles";

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 16,
  },
}))(Tooltip);

class Menu extends Component {

    render() {
        return (
            <>
                <LightTooltip title="Select text and right click to annotate, then click submit button" aria-label="submit annotation">
                    <HelpIcon fontSize="large"/>
                </LightTooltip>
                <List className="scrollable">
                    {this.props.plays.map((play, key) => (
                        <div key={key}>
                            <ListItem button onClick={this.props.loadPlay(play)}>
                                <ListItemText primary={play}/>
                            </ListItem>
                            <Divider/>
                        </div>
                    ))}
                </List>
            </>
        );
    }
}

export default Menu;