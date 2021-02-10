import React from 'react'
import Slider from 'react-slick';
import image1 from '../../assets/1.jpeg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
  };

export default function TaskTwo() {
   
    return (
        <div className="tsk2">
            <Slider {...settings} className="slider">
          <div className="ssli-cnt">
            <img src={image1}  />
            <h1 className="img-text">Lorem Ipsum. Some dummy text</h1>
          </div>
          <div className="ssli-cnt">
            <img src={image2}  />
            <h1 className="img-text">Lorem Ipsum. Some dummy text</h1>
          </div>
          <div className="ssli-cnt">
            <img src={image3}  />
            <h1 className="img-text">Lorem Ipsum. Some dummy text</h1>
          </div>
          <div className="ssli-cnt">
            <img src={image4}  />
            <h1 className="img-text">Lorem Ipsum. Some dummy text</h1>
          </div>
          
        </Slider>
        </div>
    )
}
