import * as React from "react";
import Grid from "@material-ui/core/Grid";

export default class Line extends React.Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={10} className="line"
                      onMouseDown={this.props.recordStart(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                      onMouseUp={this.props.recordEnd(this.props.line.line_num, this.props.speaker, this.props.publicKey)}
                      onContextMenu={
                          this.props.onRightClick(this.props.line.line_num, this.props.speaker, this.props.line.text)
                      }>
                    {this.props.line.text}
                </Grid>
                <Grid item xs={2}>
                    <span style={{backgroundColor:"darkblue"}} className="annotation">{this.props.line.annotation}</span>
                </Grid>
            </Grid>);
    }
}