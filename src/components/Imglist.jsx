import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Pagination, Navigation } from "swiper";
import { Autoplay } from 'swiper';
import { useRef } from 'react';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./../css/styles.css";
import Img1 from "./../assets/kbm-diniyyah.jpg";
import Img2 from "./../assets/kbm-it.jpg";
import Img3 from "./../assets/rihlah.png";
import Img4 from "./../assets/seminar.jpg";
import Img5 from "./../assets/santri-tpa.jpg"
import Img6 from "./../assets/santri-tpa2.jpg"

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="w-11/12 m-auto" id="gallery">
            <div data-aos="zoom-in-up"data-aos-duration="2000">
                <div className="text-center p-6 mt-8">
                    <h1 className="py-3 px-10">Gallery Kegiatan Santri Al Mahir</h1>
                    <p className="lg:w-6/12 m-auto capitalize tracking-wider">
                        Berikut gallery kegiatan santri TPA PPQ Al Mahir dan santri PPQIT Al Mahir
                    </p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={120}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper cursor-grab pb-20"
                >
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img1} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan KBM Dinniyyah Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img2} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan KBM IT Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img3} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Rihlah Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img4} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Seminar Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img5} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Pengajian Santri TPA PPQ Al Mahir & Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-96">
                            <img src={Img6} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Lomba Santri TPA PPQ Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: ["-120%", 0, -500],
                        },
                        next: {
                            shadow: false,
                            translate: ["120%", 0, -500],
                        },
                    }}
                    modules={[EffectCreative, Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper2 md:w-6/12 shadow-none"
                >
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img1} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan KBM Dinniyyah Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img2} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan KBM IT Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img3} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Rihlah Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img4} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Seminar Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img5} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Pengajian Santri TPA PPQ Al Mahir & Santri PPQIT Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full">
                            <img src={Img6} alt="" className="rounded-xl" />
                            <p className="p-3 text-center">Kegiatan Lomba Santri TPA PPQ Al Mahir</p>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
