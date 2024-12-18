"use client";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { Swiper, SwiperSlide } from "swiper/react";
import { SLIDER_MOVIGEN } from "./Helper";
import Image from "next/image";

const Slider = () => {
    return (
        <div
            className="lg:pt-[120px] lg:pb-[100px] py-24 container relative z-20 mx-auto"
            id="product">
            <div className="relative">
                <Swiper className="!pb-[76px] duration-300"
                    centeredSlides
                    loop={true}
                    loopAdditionalSlides={3}
                    spaceBetween={24}
                    slidesPerView={1.5}
                    breakpoints={{
                        490: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}>
                    {SLIDER_MOVIGEN.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <div className="bg-[#EBEBEB] rounded-2xl overflow-hidden active-slide relative">
                                    <FontAwesomeIcon
                                        icon={faCirclePlay}
                                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 autoplay hidden max-sm:w-10 max-sm:h-10 size-16"
                                    />
                                    <Image
                                        src={obj.imageUrl}
                                        alt={obj.name}
                                        width={272}
                                        height={344}
                                        className="object-cover sm:h-[344px] h-[300px] w-full"
                                    />
                                </div>
                                <h3 className="sm:mt-6 mt-4 text-primary sm:text-xl text-base sm:mb-3 mb-2 font-inter font-medium">
                                    {obj.name}
                                </h3>
                                <p className="text-secondary sm:text-lg text-sm font-inter">
                                    {obj.type}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;