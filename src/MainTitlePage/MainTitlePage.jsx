import React, {Component} from 'react'
import'./MainTitlePage.css'

export default class MainTitlePage extends Component{
    render(){
        return(
            <h1 className="main-title">{this.props.title}</h1>
        )
    }
}