import React, {Component} from 'react'
import'./Room.css'
import {withRouter} from 'react-router-dom'
import Gallery from '../Gallery/Gallery'

class Room extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: null,
            title: null,
            cover:null,
            pictures:[],
            description: null,
            host: {},
            rating:null,
            location:null,
            equipments:[],
            tags:[],
        }
    }

    componentDidMount(){
        fetch("../../logements.json")
        .then(response => response.json())
        .then(datas => {
            datas.forEach((room) =>{
                if (room.id === this.props.location.pathname.substring(2)) {
                    this.setState({
                        id: room.id,
                        title: room.title,
                        cover:room.cover,
                        pictures:room.pictures,
                        description: room.description,
                        host: room.host,
                        rating: room.rating,
                        location: room.location,
                        equipments: room.equipments,
                        tags:room.tags,
                    })
                }
            })
        })
    }

    render(){
        // const infos = this.state.item
        return(
            <main className="main">
                j'affiche l'id de {this.state.id}
                <Gallery image={this.state.pictures} />
            </main>
        )
    }
}

const RoomRouted = withRouter(Room)
export default RoomRouted