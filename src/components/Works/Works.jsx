import React, { useContext } from "react";
import "./Works.css";
import CSX from "../../img/csx.png";
import Strux from "../../img/Strux.jpg";
import Rimayu from "../../img/Rimayu.png";
import Dess from "../../img/helo.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Strux Inc |  Best Creative Agency in Mumbai
            <br />
            Mumbai-based Integrated Creative Agency providing unique solutions for Web Design
            <br />
            & Development, Social Media Management, 3D Design & Graphics.
            <br />
            
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={CSX} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Strux} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Rimayu} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Dess} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
