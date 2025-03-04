import Container from 'react-bootstrap/Container';
import '../App.scss'
import '../Responsive.scss'
import Button from 'react-bootstrap/Button';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, Outlet} from 'react-router-dom'
export default function Slider1() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
         <div className="pt2"></div>
          <div className="sld-container" style={{ width:'97%'}}>
          <Slider {...settings} >
        <div className='dfjcac d-flex'>   
          <Link to="/class01">Class 01</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class02">Class 02</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class03">Class 03</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class04">Class 04</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class05">Class 05</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class05">Class 05</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class06">Class 06</Link>
        </div>
        <div className='dfjcac d-flex'>
        <Link to="/class07">Class 07</Link>
        </div>
      </Slider>
          </div>
        </>
    )
}