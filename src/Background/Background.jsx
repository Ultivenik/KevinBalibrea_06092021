import React, {Component} from 'react'
import './Background.css'

export default class Background extends Component {
    render(){
        return(
            <div className={this.props.class}>
                {this.props.children ? this.props.children : null}
            </div>
        )
    }
}
