import React, {Component} from 'react'
import'./Room.css'
import {withRouter} from 'react-router-dom'
import Gallery from '../Gallery/Gallery'
import Dropdown from '../Dropdown/Dropdown'
import Tags from '../Tags/Tags'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import RoomPageTitle from '../RoomPageTitle/RoomPageTitle'
import MainTitlePage from '../MainTitlePage/MainTitlePage'

class Room extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: null,
            title: null,
            cover:null,
            pictures:[],
            description: null,
            host: [],
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
                    return this.setState({
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
        const stars = []
        //generating stars
        for (let i = 0; i < 5; i++) {
            //push on stars array and color by the rating property on logement.json
            stars.push(<Rating key={i} colored={i < this.state.rating ? "#FF6060" : "#E3E3E3"} />)
        }
        return(
            <main className="main room">
                <Gallery image={this.state.pictures} />
                <section className="profile">
                    <div>
                        <MainTitlePage class="room-title" title={this.state.title} />
                        <RoomPageTitle class="room-location" title={this.state.location} />
                        <Tags tags={this.state.tags} />
                    </div>
                    <div className="rate-and-profile">
                        <div className="rating">
                            {stars}
                        </div>
                        <Avatar host={this.state.host} />
                    </div>
                </section>
                <section className="collapse-rooms">
                    <Dropdown
                        dropdownTitle="Description"
                        content={this.state.description}
                        classWrapper="dropdown"
                        classTitleWrapper="dropdown-flex"
                        classTitle="dropdown-title"
                        classContent="dropdown-content"
                    />
                    <Dropdown
                        dropdownTitle="Equipements"
                        content={
                            <ul>
                                {this.state.equipments.map((equipement, key)=>{
                                   return <li key={key}>{equipement}</li>
                                })}
                            </ul>
                        }
                        classWrapper="dropdown"
                        classTitleWrapper="dropdown-flex"
                        classTitle="dropdown-title"
                        classContent="dropdown-content"
                    />
                </section>
            </main>
        )
    }
}

const RoomRouted = withRouter(Room)
export default RoomRouted