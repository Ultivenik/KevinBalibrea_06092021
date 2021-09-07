import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Background from '../Background/Background'
import MainTitlePage from '../MainTitlePage/MainTitlePage'
import backgroundhome from './../images/backgroundhome.png'
import './Home.css'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            item: []
        }
    }
    componentDidMount(){
        fetch("../../logements.json")
        .then(response => response.json())
        .then(datas => {
            const resultsDatas = datas
            this.setState({
                item: resultsDatas
            })
        })
    }

    render(){
        return(
            <main className="main">
                <section className="maintitle-bg">
                    <Background src={backgroundhome} alt="image de fond montagnes" />
                    <MainTitlePage title="Chez vous, partout et ailleurs" />
                </section>
                <section className="section-appartment">
                    {this.state.item.map((items, key)=>
                        <Link to={"/" + items.title}>
                            <figure className="room-profile" key={key}>
                                <img src={items.cover} alt="logement" />
                                <figcaption className="room-title">
                                        {items.title}
                                </figcaption>
                            </figure>
                        </Link>
                    )}
                </section>
            </main>
        )
    }
}
