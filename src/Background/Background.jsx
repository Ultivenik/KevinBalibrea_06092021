import React, {Component} from 'react'
import './Background.css'

export default class Background extends Component {
    render(){
        return(
            <div className="background">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}
