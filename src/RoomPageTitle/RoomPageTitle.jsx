import React, {Component} from 'react'
import'./RoomPageTitle.css'

export default class RoomPageTitle extends Component{
    render(){
        return(
            <h2 className={this.props.class}>{this.state.location}</h2>
        )
    }
}