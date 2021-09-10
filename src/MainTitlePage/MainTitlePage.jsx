import React, {Component} from 'react'
    // import'./MainTitlePage.css'

export default class MainTitlePage extends Component{
    render(){
        return(
            <h1 className={this.props.class}>{this.props.title}</h1>
        )
    }
}