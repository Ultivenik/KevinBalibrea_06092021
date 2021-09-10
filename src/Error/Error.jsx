import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Error.css'

export default class Error extends Component {
    render(){
        return(
            <main className="error-wrapper">
                <h1 className="error-title">{this.props.error}</h1>
                <p className="error-description">{this.props.description}</p>
                <span className="home-link">
                    <Link to="/">{this.props.back}</Link>
                </span>
            </main>
        )
    }
}