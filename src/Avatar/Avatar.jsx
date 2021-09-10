import React, {Component} from 'react'
import './Avatar.css'

export default class Avatar extends Component{
    render(){
        return(
            <div className="avatar">
                <h3 className="avatar-title">{this.props.host.name}</h3>
                <img className="avatar-img" src={this.props.host.picture} alt="hôte" />
            </div>
        )
    }
}