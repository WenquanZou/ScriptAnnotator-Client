import * as React from "react";
import Grid from "@material-ui/core/Grid";
import {Tooltip} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const AnnotationTooltip = withStyles(theme => ({
  tooltip: {
    color: 'white',
    fontSize: 16,
  },
}))(Tooltip);

export default class Line extends React.Component {
    render() {
        if (this.props.line.annotation) {
            return (<Grid container spacing={2}>
                <AnnotationTooltip title={this.props.line.annotation} arrow>
                    <Grid item style={{color:'red'}}
                          onMouseDown={this.props.recordStart(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                          onMouseUp={this.props.recordEnd(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                          onContextMenu={
                              this.props.onRightClick(this.props.line.line_num, this.props.speaker, this.props.line.text)
                          }>
                        {this.props.line.text}
                    </Grid>
                </AnnotationTooltip>
            </Grid>);
        } else {
            return (
                <Grid container spacing={2}>
                    <Grid item
                          onMouseDown={this.props.recordStart(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                          onMouseUp={this.props.recordEnd(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                          onContextMenu={
                              this.props.onRightClick(this.props.line.line_num, this.props.speaker, this.props.line.text)
                          }>
                        {this.props.line.text}
                    </Grid>
                </Grid>
            );
        }

    }
}