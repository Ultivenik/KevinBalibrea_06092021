import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Error from './Error/Error'
import Footer from './Footer/Footer'
import Room from './Room/Room'
import './index.css'

class App extends Component{
    render(){
        return(
            <Router>
                <Header home="Accueil" about="À propos" alt="logo de Kasa"/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/Apropos">
                        <About />
                    </Route>
                    <Route path="/notfound">
                        <Error error="404" description="Oups! La page que vous demandez n'existe pas." back="Retourner sur la page d’accueil" />
                    </Route>
                    <Route path="/:id/">
                        <Room />
                    </Route>
                </Switch>
                <Footer alt="logo de Kasa" copyright="© 2020 Kasa. All rights reserved"/>
            </Router>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"))

