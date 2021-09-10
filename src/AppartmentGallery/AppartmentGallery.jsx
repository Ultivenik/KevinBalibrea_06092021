import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AppartmentGallery.css'

export default class AppartmentGallery extends Component {
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
            <section className="section-appartment">
                {this.state.item.map((items, key)=>
                    <Link key={key} to={"/:" + items.id}>
                        <figure className="appartment-profile">
                            <img src={items.cover} alt="logement" />
                            <figcaption className="appartment-title">
                                {items.title}
                            </figcaption>
                        </figure>
                    </Link>
                )}
            </section>
        )
    }
}