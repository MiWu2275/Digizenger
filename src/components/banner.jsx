import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '/images/banner 1.png';
import banner2 from '/images/banner 2.png';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

function Banner({activeChat}) {
    console.log(activeChat);
    const slides = [banner1, banner2, banner1, banner1]; 
    const lastSlideIndex = slides.length - 1; // Get the last slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="flex flex-col items-center justify-end rounded-[8px] self-stretch bg-blue-200"
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)} // Update current index
                style={{
                    paddingRight: activeChat ? (currentIndex === lastSlideIndex ? '0px' : '50px') : (currentIndex === lastSlideIndex ? '0px' : '100px') , // Conditional padding
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className='bg-red-100 rounded-[8px]'>
                        <img src={slide} className="rounded-[8px]" alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Banner;
