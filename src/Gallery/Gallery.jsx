import React, {Component} from 'react'
import'./Gallery.css'

export default class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentImageIndex: 0
        }
        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
    }

    previousImage(){
        const lastIndex = this.props.image.length - 1
        const index =  this.state.currentImageIndex === 0 ? lastIndex : this.state.currentImageIndex - 1
        this.setState({
            currentImageIndex: index
        })
        if (this.props.image.length <=1) {
            return this.state.currentImageIndex
        }else{
            return null
        }
    }

    nextImage(){
        const lastIndex = this.props.image.length -1
        const index =  this.state.currentImageIndex === lastIndex ? 0 : this.state.currentImageIndex + 1

        this.setState({
            currentImageIndex: index
        })
    }

    render(){
        return(
            <section>
                <div className="carousel">
                    {this.props.image.length !== 1 ?
                        <React.Fragment>
                            <i className="fas fa-chevron-left" onClick={this.previousImage}></i>
                            <i className="fas fa-chevron-right" onClick={this.nextImage}></i>
                        </React.Fragment> : null
                    }
                    <img src={this.props.image[this.state.currentImageIndex]} alt="galerie" />
                </div>
            </section>
        )
    }
}