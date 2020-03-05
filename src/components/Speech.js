import React, {Component} from "react";
import Stagedir from "./Stagedir";
import Line from "./Line"

export default class Speech extends Component {
    render() {
        return (
            <div className="speech">
                <span className="speaker">{this.props.speaker}</span>
                {this.props.content
                    .map((line, key) => {
                        if (line.type === "stagedir") {
                            return <Stagedir key={key} dir={line.dir}/>
                        } else {
                            return (
                                <Line key={key} recordStart={this.props.recordStart}
                                      recordEnd={this.props.recordEnd}
                                      onRightClick={this.props.onRightClick}
                                      speaker={this.props.speaker}
                                      line={line}/>

                            )
                        }
                    })
                }
            </div>
        );
    }
}