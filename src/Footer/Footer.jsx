import React, {Component} from 'react'
import logo from '../images/logoFooter.png'
import './Footer.css'

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <img className="logo-footer" src={logo} alt={this.props.alt} />
                <p className="copyright">{this.props.copyright}</p>
            </footer>
        )
    }
}

