import bg_dokumentasi_baru from "../assets/bg_dokumentasi_baru.png";
import teks_dokumentasi from "../assets/teks_dokumentasi.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { Gambar1, Gambar2, Gambar3, Gambar4 } from "../assets/dokumentasi/index";

const Dokumentasi = () => {
    return (

        <>
        <div className=" w-full  bg-center bg-no-repeat  h-full -mt-[110px] md:-mt-[80px] px-4 pb-10 " style={{ backgroundImage: `url(${bg_dokumentasi_baru})` }}> 
            <img className="w-[338px] h-[160px] lg:w-[700px] mx-auto pt-28 md:pt-28 lg:pt-20 md:w-[700px] md:h-[230px] lg:w-[800px] lg:h-[210px] lg:mx-auto lg:pb-10 " src={teks_dokumentasi} alt="teks dokumentasi" />

          

<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={"2"}
        coverflowEffect={{
          rotate: 3,
          stretch: 0,
          depth: 650,
          modifier: 2.5,
          slideShadows: false,

        }}
        breakpoints={{
            640: {
           slidesPerView: 2,
          coverflowEffect: {
            rotate: 3,
            stretch: 0,
            depth: 400,
            modifier: 3,
           
          },
      },
    1024: {
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 3,
        stretch: 0,
        depth: 400,
        modifier: 3,
       
      },
    },
}}
        pagination={{ clickable: true}}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mt-6 lg:mt-6 "
      >
     {
        [Gambar1, Gambar2, Gambar3, Gambar4].map((item, id) => {
            return (
                <SwiperSlide key={id} className="mb-8">
                    <img className="w-[70%] sm:w-[100%] 2xl:w-[80%] mx-auto rounded-3xl" src={item} alt="slide_image" />
                </SwiperSlide>
            )
        })
     }
      </Swiper>

           


        </div>
        
        
        
        
        </>


    );
}

export default Dokumentasi;