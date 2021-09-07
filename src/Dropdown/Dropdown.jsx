import React, {Component} from 'react'
import './Dropdown.css'

export default class Dropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
        this.openDropdown = this.openDropdown.bind(this)
    }
    openDropdown(){
        this.setState((state) =>{
            return{
                isOpen: !state.isOpen,
            }
        })
    }
    render(){
        return(
            <div className="dropdown" onClick={this.openDropdown}>
                <div className="dropdown-flex">
                    <h2 className="dropdown-title">{this.props.dropdownTitle}</h2>
                    {this.state.isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                {this.state.isOpen &&(
                    <div className="dropdown-content">
                        {this.props.content}
                    </div>
                )}
            </div>
        )
    }
}