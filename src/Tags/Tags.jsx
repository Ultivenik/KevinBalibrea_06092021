import React, {Component} from 'react'
import './Tags.css'

export default class Tags extends Component{
    render(){
        return(
            <div className="tag-wrapper">
                {this.props.tags.map((tag, key) =>{
                    return <span key={key} className="tag">{tag}</span>
                })}
            </div>
        )
    }
}