import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'

class App extends Component{
    render(){
        return(
            <Header home="Accueil" about="À propos"/>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))