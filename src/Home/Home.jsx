import React, {Component} from 'react'
import AppartmentGallery from '../AppartmentGallery/AppartmentGallery'
import Background from '../Background/Background'
import MainTitlePage from '../MainTitlePage/MainTitlePage'
import backgroundhome from './../images/backgroundhome.png'
import './Home.css'


export default class Home extends Component{
    render(){
        return(
            <main className="main">
                <section className="maintitle-bg">
                    <Background src={backgroundhome} alt="image de fond montagnes" />
                    <MainTitlePage title="Chez vous, partout et ailleurs" />
                </section>
                <AppartmentGallery />
            </main>
        )
    }
}
