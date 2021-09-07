import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Error from './Error/Error'
import './index.css'
import Footer from './Footer/Footer'

class App extends Component{
    render(){
        return(
            <Router>
                <Header home="Accueil" about="À propos" alt="logo de Kasa"/>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/À propos">
                        <About />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
                <Footer alt="logo de Kasa" copyright="© 2020 Kasa. All rights reserved"/>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))