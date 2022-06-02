import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { Player } from "video-react";
import video from "../components/video/Eliud Kipchoge _ Ready to Run NYC _ Nike.mp4";
import "../pages/Home.css";
import Carousel from "../components/Carousel/Carousel";
// import Slider from "video-react/lib/components/Slider";
import CardCloth from "../components/CardCloth/CardCloth";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      {/* <div className="typewriter"> */}
      <h1
        data-aos="fade-down"
        data-aos-delay="600"
        style={{ textAlign: "center", fontSize: "2rem", fontWeight: "600" }}
      >
        STYLE. &nbsp; QUALITY. &nbsp; EXCLUSIVE.
      </h1>
      {/* </div> */}
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        className="container video"
      >
        <Player
          autoPlay
          playsInline
          loop
          muted
          // poster={video}
          className="video"
        >
          <source src={video} />
        </Player>
      </div>
      <h1
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 900 }}
      >
        STYLES FOR <br />
        OUTDOOR EXPLORES
      </h1>
      <h3
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ textAlign: "center" }}
      >
        Get outside in style made with environmentally preffered materials.
      </h3>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ textAlign: "center" }}
      >
        <Button
          component={Link}
          to="/products"
          sx={{ color: "#fff", backgroundColor: "black" }}
        >
          Shop
        </Button>
      </div>
      <Carousel />
      <br />
      <h1
        data-aos="fade-up"
        data-aos-delay="250"
        style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800 }}
      >
        HIGHLIGHTS MEN'S BALENCIAGA CAMPAIGN
      </h1>
      <div data-aos="fade-up" data-aos-delay="150" className="container">
        <img
          width="100%"
          src="https://balenciaga.dam.kering.com/m/60af50893414fc73/Large-JUSTIN_LOOK1_H_balenciaga_2200x1100.jpg"
          alt=""
        />
      </div>
      <h1
        data-aos="fade-up"
        data-aos-delay="150"
        style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 900 }}
      >
        NEWNESS - SUMMER 22
      </h1>

      <div data-aos="fade-up" data-aos-delay="150" className="container">
        <CardCloth />
      </div>
      {/* <br />
      <br /> */}
      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          textAlign: "center",
          fontWeight: "900",
          color: "rgb(60, 179, 113)",
        }}
      >
        WHEN YOU SEE THIS TEXT, YOU ARE TAKING ONE SMALL STEP TOWARDS YOUR
        DREAM.
      </h2>
      <div data-aos="fade-up" data-aos-delay="150">
        <img
          width="100%"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1440,c_limit/7bbb610a-f04f-4f51-809a-686fb607465c/nike-sustainability-move-to-zero.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
