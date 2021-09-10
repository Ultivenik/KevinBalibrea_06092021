import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './Header.css'

export default class Header extends Component{

    render(){
        return(
            <header className="header">
                <Link to="/">
                    <img className="logo" src={logo} alt={this.props.alt} />
                </Link>
                <nav className="navbar">
                    <ul className="listLink">
                        <li className="links">
                            <Link to="/"> {this.props.home} </Link>
                        </li>
                        <li className="links">
                            <Link to="/Apropos"> {this.props.about} </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
