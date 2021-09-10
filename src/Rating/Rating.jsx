import React, {Component} from 'react'
import './Rating.css'

export default class Rating extends Component{

    render(){
      
        return(
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8225 7.5L9 1.5L7.1775 7.5H1.5L6.135 10.8075L4.3725 16.5L9 12.9825L13.635 16.5L11.8725 10.8075L16.5 7.5H10.8225Z" fill={this.props.colored} />
                </svg>
        )
    }
}