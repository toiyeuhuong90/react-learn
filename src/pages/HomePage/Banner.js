import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "./../../components/assets/index";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    };
    return (
        <Slider {...settings}>
          <div>
            <img src={images.default.ban1} />
          </div>
          <div>
            <img src={images.default.ban2} />
          </div>
          <div>
            <img src={images.default.ban3} />
          </div>
        </Slider>
    );
  }
}

export default SimpleSlider;
