import React, {Component} from 'react'
import'./Gallery.css'

export default class Gallery extends Component{
    render(){
        return(
            <div>
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-chevron-right"></i>
                {this.props.image.map((img, key) =>
                    <img key={key} src={img} alt="galerie" />
                )}
            </div>
        )
    }
}