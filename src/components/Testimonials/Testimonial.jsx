import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import CSX from "../../img/csx.png";
import Strux from "../../img/Strux.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: Strux,
      review:
       "Prithvi joined our organization as a full-time intern with sufficient experience for someone his age and has managed to grow exponentially in a short period .He has consistently delivered high-quality work on time and with great attention to detail.",
      link: "https://drive.google.com/file/d/1qcJID1l4Sdr8rVyKw8JomTW-sQPbvxxe/view?usp=sharing",
    },
    {
      img: CSX,
      review:
        "Prithvi has been an  remarkable asset to our organization. During his time here, he showcased exceptional problem-solving skills and consistently supported various departmental needs ",
      link: "https://drive.google.com/file/d/1eQSyHUsqpHy3f_dKngJ_smiXznSyyIN5/view?usp=sharing",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <a href={client.link} target="_blank" rel="noopener noreferrer">
                  <button className="button s-button">Learn More</button>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

