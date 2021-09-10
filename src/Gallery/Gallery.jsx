import React, {Component} from 'react'
import'./Gallery.css'

export default class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            current: 0
        }
        this.previousImage.bind(this)
        this.nextImage.bind(this)
    }

    goToSlide(index){
        this.setState({
            current: index
        })
    }
    previousImage(e){
        e.preventDefault()
        let index = this.state.current
        let {slides} = this.props
        let lengthSlide = slides.length

        if (index < 1) {
            index = lengthSlide
        }
        --index
        this.setState({
            current: index
        })
    }

    nextImage(e){
        e.preventDefault()
        let index = this.state.current
        let {slides} = this.props
        let lengthSlide = slides.length -1

        if (index === lengthSlide) {
            index = -1
        }
        ++index
        this.setState({
            current: index
        })
    }
    render(){
        console.log(this.props);
        return(
            <section>
                <div className="carousel">
                    <i className="fas fa-chevron-left" onClick={this.previousImage}></i>
                    <i className="fas fa-chevron-right" onClick={this.nextImage}></i>
                    {this.props.image.map((img, key) =>{
                        return(
                            key === this.state.current &&
                            <img key={key} src={img} alt="galerie" />
                        )
                    })}
                </div>
            </section>
        )
    }
}