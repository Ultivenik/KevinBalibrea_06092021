import React, {Component} from 'react'
import './Dropdown.css'

export default class Dropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            isRotated: false,
            aboutDatas: []
        }
        this.openDropdown = this.openDropdown.bind(this)
    }
    openDropdown(){
        this.setState((state) =>{
            return {
                isOpen: !state.isOpen,
                isRotated: !state.isRotated
            }
        })
    }

    render(){
        return(
            <div className={this.props.classWrapper} onClick={this.openDropdown}>
                <div className={this.props.classTitleWrapper}>
                    <h2 className={this.props.classTitle}>{this.props.dropdownTitle}</h2>
                    {this.state.isRotated ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                {this.state.isOpen ?
                   ( <div className={this.props.classContent}>
                        {this.props.content}
                    </div>) : null
                }
            </div>
        )
    }
}