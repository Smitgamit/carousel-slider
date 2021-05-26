import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class App extends Component {

  constructor(props){
    super(props);
    // this.slide = this.slide.bind(this);
}
scroll =(y) =>{
    y > 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
    )
}
componentWillMount(){
    window.addEventListener('wheel', (e) => {
        this.scroll(e.wheelDelta);
    })
}

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
    return (
      <div>

        <h2> Single Item</h2>
        <div className="container" >

          <Slider {...settings} ref={slider => this.slider = slider }>
            <div>
              <h3>1</h3>
              <img src="http://placekitten.com/g/400/300" alt='img'/>
            </div>
            <div>
              <h3>2</h3>
              <img src="http://placekitten.com/g/400/300" alt='img' />
            </div>
            <div>
              <h3>3</h3>
              <img src="http://placekitten.com/g/400/300" alt='img' />
            </div>
            <div>
              <h3>4</h3>
              <img src="http://placekitten.com/g/400/300" alt='img'/>
            </div>
            <div>
              <h3>5</h3>
              <img src="http://placekitten.com/g/400/300" alt='img' />
            </div>
            <div>
              <h3>6</h3>
              <img src="http://placekitten.com/g/400/300" alt='img' />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}