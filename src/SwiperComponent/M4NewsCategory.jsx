import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Virtual } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/M4NewsCategory.css";
import NEWScorp01 from "../NEWSCORP/NEWScorp (1).png";
import NEWScorp02 from "../NEWSCORP/NEWScorp (2).png";
import NEWScorp03 from "../NEWSCORP/NEWScorp (3).png";
import NEWScorp04 from "../NEWSCORP/NEWScorp (4).png";
import NEWScorp05 from "../NEWSCORP/NEWScorp (5).png";
import NEWScorp06 from "../NEWSCORP/NEWScorp (6).png";
import NEWScorp07 from "../NEWSCORP/NEWScorp (7).png";
import NEWScorp08 from "../NEWSCORP/NEWScorp (8).png";
import NEWScorp09 from "../NEWSCORP/NEWScorp (9).png";
import NEWScorp10 from "../NEWSCORP/NEWScorp (10).png";
import NEWScorp11 from "../NEWSCORP/NEWScorp (11).png";
import NEWScorp12 from "../NEWSCORP/NEWScorp (12).png";
import NEWScorp13 from "../NEWSCORP/NEWScorp (13).png";
import NEWScorp14 from "../NEWSCORP/NEWScorp (14).png";
import NEWScorp15 from "../NEWSCORP/NEWScorp (15).png";
import NEWScorp16 from "../NEWSCORP/NEWScorp (16).png";
import NEWScorp17 from "../NEWSCORP/NEWScorp (17).png";
import NEWScorp18 from "../NEWSCORP/NEWScorp (18).png";
import NEWScorp19 from "../NEWSCORP/NEWScorp (19).png";
import NEWScorp20 from "../NEWSCORP/NEWScorp (20).png";
import NEWScorp21 from "../NEWSCORP/NEWScorp (21).png";
import NEWScorp22 from "../NEWSCORP/NEWScorp (22).png";
import NEWScorp23 from "../NEWSCORP/NEWScorp (23).png";
import NEWScorp24 from "../NEWSCORP/NEWScorp (24).png";

const M4NewsCategory = () => {
  return (
    <div>
      <Swiper>
        <SwiperSlide>
          <section className="swiperM4Page1">
            <nav>
              <nav className="swiperM4Line1">
                <div className="swiperblock">
                  <img src={NEWScorp01} alt="01" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp02} alt="02" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp03} alt="03" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp04} alt="04" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp05} alt="05" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp06} alt="06" className="swiperM4IMG" />
                </div>
              </nav>
              <nav className="swiperM4Line1">
                <div className="swiperblock">
                  <img src={NEWScorp07} alt="07" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp08} alt="08" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp09} alt="09" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp10} alt="10" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp11} alt="11" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp12} alt="12" className="swiperM4IMG" />
                </div>
              </nav>
              <nav className="swiperM4Line1">
                <div className="swiperblock">
                  <img src={NEWScorp13} alt="13" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp14} alt="14" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp15} alt="15" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp16} alt="16" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp17} alt="17" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp18} alt="18" className="swiperM4IMG" />
                </div>
              </nav>
              <nav className="swiperM4Line1">
                <div className="swiperblock">
                  <img src={NEWScorp19} alt="19" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp20} alt="20" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp21} alt="21" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp22} alt="22" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp23} alt="23" className="swiperM4IMG" />
                </div>
                <div className="swiperblock">
                  <img src={NEWScorp24} alt="24" className="swiperM4IMG" />
                </div>
              </nav>
            </nav>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default M4NewsCategory;
