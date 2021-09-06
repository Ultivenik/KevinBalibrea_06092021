import React, {Component} from 'react';


export default class Header extends Component{

    render(){
        return(
            <header>
                <img src="/assets/images/logo.png" alt="logo de Kasa" />
                    <nav>
                    <ul>
                        <li>{this.props.home}</li>
                        <li>{this.props.about}</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
