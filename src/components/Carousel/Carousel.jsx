import React, { Component, useEffect } from "react";
import Slider from "react-slick";
// import img1 from "./img/1-2.jpeg";
// import img2 from "./img/15b77901-eb6e-46a8-8c2e-76beb0b5b42a.webp";
// import img3 from "./img/93b488c2-1247-4186-af5e-f1ac5060af2a.webp";
// import img4 from "./img/AJ_I_Low_TravisScott-CQ4277-001_A1_Lateral_HR_hd_1600.jpeg";
// import img5 from "./img/Cocoshoes_Nike_Dunk_Low_Off_White_Lot_8_DM1602_106_1644394006108_1.webp";
// import img6 from "./img/ebad848a-13b1-46d5-a85e-49b4b6a4953c.webp";
// import img7 from "./img/nike-dunk-low-off-white-lot-38.webp";
// import img8 from "./img/Nike-Dunk-Low-Off-White-Pine-Green-1.jpeg";
import img1 from "../img/nike1.webp";
import img2 from "../img/nike2.webp";
import img3 from "../img/nike3.webp";
import img4 from "../img/nike4.webp";
import img5 from "../img/nike5.webp";
import img6 from "../img/nike6.webp";
import img7 from "../img/nike7.webp";

import "./Carousel.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,

      // scrollBy: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      // autoplay: true,
      // cssEase: "linear",
      // autoplaySpeed: -5,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    let arr = [
      { img: img1, title: "Nike Air Force 1 '07" },
      { img: img2, title: "Nike Air Vapormax Plus" },
      { img: img3, title: "Nike Air Zoom Pegasus 38" },
      { img: img4, title: "Nike Air Max 97" },
      { img: img5, title: "Nike Air Max 97" },
      { img: img6, title: "Nike Blazer Mid '77" },
      { img: img7, title: "Nike Air Max Pre-Day" },
    ];

    return (
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="200">
          Popular Right Now
        </h2>
        <Slider {...settings}>
          {arr.map((item, index) => {
            return (
              <div key={index}>
                {/* <img className="photo-shoes" src={item} alt="photo" /> */}

                <Card
                  data-aos="fade-right"
                  data-aos-delay="100"
                  sx={{ maxWidth: 310 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="400"
                      image={item.img}
                      alt="photo"
                      className="photo-shoes"
                    />
                    {/* <CardContent> */}
                    <Typography
                      fontSize={"1rem"}
                      gutterBottom
                      variant="h6"
                      component="div"
                      fontWeight="600"
                    >
                      {item.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography> */}
                    {/* </CardContent> */}
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
