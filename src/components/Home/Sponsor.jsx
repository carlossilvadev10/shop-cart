import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Sponsor01 from "../../assets/images/sponsor/01.png"
import Sponsor02 from "../../assets/images/sponsor/02.png"
import Sponsor03 from "../../assets/images/sponsor/03.png"
import Sponsor04 from "../../assets/images/sponsor/04.png"
import Sponsor05 from "../../assets/images/sponsor/05.png"
import Sponsor06 from "../../assets/images/sponsor/06.png"

const sponsorList = [
    {
        imgUrl: Sponsor01,
    },
    {
        imgUrl: Sponsor02,
    },
    {
        imgUrl: Sponsor03,
    },
    {
        imgUrl: Sponsor04,
    },
    {
        imgUrl: Sponsor05,
    },
    {
        imgUrl: Sponsor06,
    },
];

const Sponsor = () => {
    return (
        <div className = "sponsor-section section-bg">
            <div className = "container">
                <div className = "section-wrapper">
                    <div className = "section-slider">
                        <Swiper
                            slidesPerView = {2}
                            spaceBetween = {20}
                            autoplay = {
                                {
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }
                            }
                            breakpoints = {{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                            }}
                            modules = {[Autoplay]}
                            className = "mySwiper"
                        >
                            {
                                sponsorList.map((val, i) => (
                                    <SwiperSlide key = {i}>
                                        <div className = "sponsor-item">
                                            <div className = "sponsor-thumb">
                                                <img src = {val.imgUrl} alt = {`Sponsor ${i + 1}`} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor;