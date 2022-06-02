import { Box, Button, Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-title">
          <h2>KROSSBOX</h2>
          <h6>Since 2017</h6>
        </div>

        <div className="contacts">
          <ul>
            <li>🇰🇬 Bishkek, Kyrgyzstan</li>
            <li>📞 Phone: +996 557 000 444, +996 707 000 444</li>
          </ul>
        </div>

        <div className="social">
          <a href="https://www.instagram.com/krossbox_store/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>
            © 2022 KROSSBOX, Inc. All Rights Reserved. Online Store Rules &
            Privacy Policy
          </p>
          <img
            src="https://shop.tumar.com/wp-content/uploads/2019/02/payments.png"
            alt=""
          />
        </div>
        {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img
              className="tumar-icon"
              src="https://shop.tumar.com/wp-content/uploads/2018/12/LOGOsvg.svg"
              alt=""
              />
           

            <Button
              sx={{
                my: 2,
                color: "white",
                // display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/"
              >
              HOME
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                // display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/about"
              >
              ABOUT
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                // display: "block",
                fontSize: "16px",
              }}
              component={NavLink}
              to="/products"
              >
              PRODUCTS
            </Button >
            <Button >
             <a href="https://2gis.kg/bishkek/inside/15763234351101558/firm/70000001019852791?m=74.591641%2C42.874949%2F19.59" target="_blank" rel="" className="address-inst">ADDRESS</a>
            </Button>
            <Button>
            <a href="https://www.instagram.com/tumar_shop_kg/" target="_blank" rel="" className="address-inst">INSTAGRAM</a>
            </Button>
            <Button>
            <a href="https://www.facebook.com/shoptumar/" target="_blank" rel="" className="address-inst">FACEBOOK</a>
            </Button>
            <Button>
            <a href="https://www.pinterest.com/tumarkg/" target="_blank" rel="" className="address-inst">PINTEREST</a>
            </Button>
            <Button>
            <a href="https://www.youtube.com/channel/UCWZbcaqfxfkyeBGgQcqmcfg" target="_blank" rel="" className="address-inst">YOUTUBE</a>
            </Button>
        </Box> */}
      </Container>
    </div>
  );
};

export default Footer;
