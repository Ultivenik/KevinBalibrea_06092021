import React, {Component} from 'react'
import'./Room.css'
import {withRouter} from 'react-router-dom'

class Room extends Component{
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
        const {location} = this.props
        console.log(location);
        return(
            <main className="main">
                LA ROOM DE {location.pathname} et 
                {this.state.item.map((infos,key)=>
                <div key={key}>
                        {infos.id.indexOf(location.pathname.slice(2)) ? <span>{infos.id}</span> : null}

                </div>
                )}
            </main>
        )
    }
}

const RoomRouted = withRouter(Room)
export default RoomRouted