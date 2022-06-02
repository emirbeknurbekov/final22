import React, { useEffect } from "react";
import "../pagesCSS/About.css";
import img1 from "../components/img/IMG_5483.png";
import { margin } from "@mui/system";
const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {/* <
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "700",
          color: "rgb(60, 179, 113)",
        }}
      > */}
      <div
        data-aos="fade-down"
        data-aos-delay="150"
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
        className="container"
      >
        <img width="10%" src={img1} alt="" />
      </div>

      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "700",
          fontSize: "1.8rem",
        }}
      >
        On a late summer night in Bishkek, <br /> two guys team up and create a
        concept where <br /> fashion, music, art and sneaker culture can
        collide.
        <br /> It was at this moment that the fashion collective Krossbox was
        born.
      </h2>
      <div>
        <img
          data-aos="fade-up"
          data-aos-delay="150"
          width="100%"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1440,c_limit/59b93135-5a1b-41bc-9d88-0e523ea23206/sustainable-materials.jpg"
          alt=""
        />
      </div>
      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "700",
          fontSize: "1.8rem",
        }}
      >
        In 2017, <br /> the first official Krossbox establishment <br /> opened
        its doors at 30 Erkindik Boulevard and <br /> has since expanded to a
        new location at ul. Baytik Baatyr 43/2.
      </h2>
      <div
        // className="container"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <img
          data-aos="fade-up"
          data-aos-delay="150"
          className="aboutImg"
          width="50%"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/054a17d5-280b-45a0-b432-3e81e241a786/nike-sustainability-move-to-zero.jpg"
          alt=""
        />
        <img
          // className="aboutImg"s
          data-aos="fade-up"
          data-aos-delay="350"
          width="50%"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_666,c_limit/229851a6-e42e-4a1e-be54-7d150cdddd43/nike-sustainability-move-to-zero.jpg"
          alt=""
        />
      </div>
      <h2
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "700",
          fontSize: "1.8rem",
        }}
      >
        Krossbox is known for offering iconic limited edition shoes, <br /> high
        quality apparel and accessories and is home to <br /> over 20 of the
        most exclusive top tier brands <br /> in Kyrgyzstan.
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        className="container"
      >
        <img width="10%" src={img1} alt="" />
      </div>
    </div>
  );
};

export default About;
