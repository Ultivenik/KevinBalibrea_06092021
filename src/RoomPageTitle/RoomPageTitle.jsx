import React, {Component} from 'react'

export default class RoomPageTitle extends Component{
    render(){
        return(
            <h2 className={this.props.class}>{this.props.title}</h2>
        )
    }
}