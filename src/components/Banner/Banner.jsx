// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../../assets/RemoteLearning_shutterstock_1784228252_1200x600.jpg'
import bgimg2 from '../../assets/bg1.jpg'
import bgimg3 from '../../assets/degree-banner.jpg'

export default function Banner() {
  return (
    <div className='container px-6 py-10 w-full mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='Unlock Your Potential: Empower Yourself with Lifelong Learning!'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='Elevate Your Skills: Access Quality Education Anytime, Anywhere'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='Ignite Your Passion for Learning: Join Our Online Educational Community!'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}