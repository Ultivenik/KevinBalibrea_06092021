import React, {Component} from 'react'
import Background from '../Background/Background'
import Collapse from '../Collapse/Collapse'
import mobileBg from './../images/about-bg.png'
import backgroundAbout from './../images/backgroundabout.png'
import './About.css'


export default class About extends Component{
    constructor(props){
        super(props)
        this.state = {
            aboutDatas: []
        }
    }
    componentDidMount(){
        fetch("./../aboutContent.json")
        .then(response => response.json())
        .then(datas => datas.map(data=>{
            return this.setState({
                aboutDatas: data
            })
        }))
    }
    render(){
        return(
            <main className="main about">
                <Background class="background about-bg" src={mobileBg} srcSet={backgroundAbout} alt="montagne" />
                <Collapse
                    dropdownTitle="Fiabilité"
                    content={this.state.aboutDatas.fiabilite}
                    classWrapper="dropdown"
                    classTitleWrapper="dropdown-flex"
                    classTitle="dropdown-title"
                    classContent="dropdown-content"
                />
                <Collapse
                    dropdownTitle="Respect"
                    content={this.state.aboutDatas.respect}
                    classWrapper="dropdown"
                    classTitleWrapper="dropdown-flex"
                    classTitle="dropdown-title"
                    classContent="dropdown-content"
                />
                <Collapse
                    dropdownTitle="Service"
                    content={this.state.aboutDatas.service}
                    classWrapper="dropdown"
                    classTitleWrapper="dropdown-flex"
                    classTitle="dropdown-title"
                    classContent="dropdown-content"
                />
                <Collapse
                    dropdownTitle="Sécurité"
                    content={this.state.aboutDatas.securite}
                    classWrapper="dropdown"
                    classTitleWrapper="dropdown-flex"
                    classTitle="dropdown-title"
                    classContent="dropdown-content"
                />
            </main>
        )
    }
}