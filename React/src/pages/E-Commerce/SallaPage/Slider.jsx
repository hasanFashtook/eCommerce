import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Button from '../../../components/website/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Slider({ className }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function storeSizeScreen() {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', storeSizeScreen)
        return () => {
            window.removeEventListener('resize', storeSizeScreen)
        }
    }, [screenWidth]);


    return (
        <div className={'Slider ' + className} >
            <Swiper
                slidesPerView={1}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={screenWidth <= 768 ? false : {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                autoplay={{
                    delay: 5000
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                className=' relative'
            >
                {/* slide */}
                <SwiperSlide
                    className='relative h-[27rem] md:h-[35rem] w-full'
                >
                    <img
                        className=' object-cover object-center h-[27rem] md:h-[35rem] w-full'
                        src="/public/images/salla/panner.png" alt="" />
                    <div className="content absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container h-full flex flex-col justify-center items-center">
                        <dl className=' text-center max-w-lg mx-auto text-white mb-6'>
                            <dt className=' text-4xl mb-4'>أفضل التخفيضات 2022</dt>
                            <dd className=' text-sm'>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</dd>
                        </dl>
                        <Button arrow cart className={' mx-auto block'} type='secondary' status='solid'>اكتشف المزيد</Button>
                    </div>
                </SwiperSlide>
                {/* slide */}
                <SwiperSlide
                    className='relative h-[27rem] md:h-[35rem] w-full'
                >
                    <img
                        className=' object-cover object-center h-[27rem] md:h-[35rem] w-full'
                        src="/public/images/salla/panner.png" alt="" />
                    <div
                        className="content container h-full flex flex-col justify-center items-center
          absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <dl className=' text-center max-w-lg mx-auto text-white mb-6'>
                            <dt className=' text-4xl mb-4'>أفضل التخفيضات 2022</dt>
                            <dd className=' text-sm'>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</dd>
                        </dl>
                        <Button className={' mx-auto block'} type='secondary' status='solid'>اكتشف المزيد</Button>
                    </div>
                </SwiperSlide>



                <div className="slider-controler ">

                    {/* navigation controler */}
                    {screenWidth > 768 &&
                        <div className="container flex justify-between absolute top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2">
                            <div className="swiper-button-next grid place-items-center cursor-pointer  w-14 h-14 slider-arrow border border-white rounded-full">
                                <ChevronRightIcon className=' w-4 h-4 text-white' />
                            </div>
                            <div className="swiper-button-prev grid place-items-center cursor-pointer w-14 h-14 slider-arrow border border-white rounded-full">
                                <ChevronLeftIcon className=' w-4 h-4 text-white' />
                            </div>
                        </div>
                    }

                    {/* pagination controler */}
                    <div className="swiper-pagination container flex gap-2 justify-center left-1/2 -translate-x-1/2 absolute bottom-0 py-6 z-40"></div>
                </div>
            </Swiper >
        </div >
    )
}

Slider.propTypes = {
    className: PropTypes.string
}

export default Slider
