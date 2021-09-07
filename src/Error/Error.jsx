import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Error.css'

export default class Error extends Component {
    render(){
        return(
            <main className="error-wrapper">
                <h1 className="error-title">404</h1>
                <p className="error-description">Oups! La page que vous demandez n'existe pas.</p>
                <span className="home-link">
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </span>
            </main>
        )
    }
}