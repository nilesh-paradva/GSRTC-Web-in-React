import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../../../../App.css"

const Destinations = () => {

    return (
        <>
            <section className='pb-28'>
                <Container>
                    <Row>
                        <h3 className="text-[#123d6f] mb-3">Top Destinations</h3>
                        <Swiper spaceBetween={0}
                            autoplay={{ delay: 2500, disableOnInteraction: false, }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="mySwiper rounded-lg"
                        >
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-1 relative bg-[url(assets/images/Destination/1.jpg)] bg-cover bg-center h-[100%]">
                                    <div className="absolute bg-black opacity-65 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>01</span>
                                        <span className='h4 text-white inline-block'>Statue Of Unity</span>
                                        <p className='text-center text-white mt-8'>The Statue of Unity is the world's tallest statue, with a height of 182 metres (597 feet), located near Kevadia in the state of Gujarat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-2 relative bg-[url(assets/images/Destination/2.jpg)] bg-cover bg-center h-[100%]">
                                    <div className="absolute bg-black opacity-50 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>02</span>
                                        <span className='h4 text-white inline-block text-center'>Swaminarayan Temple</span>
                                        <p className='text-center text-white mt-8'>Swaminarayan Temple is one of the most popular religious sites. One of the most prominent features of the heritage of Swaminarayan is temple architecture</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-3 relative bg-[url(assets/images/Destination/3.jpg)] bg-cover bg-center  h-[100%]">
                                    <div className="absolute bg-black opacity-50 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>03</span>
                                        <span className='h4 text-white inline-block'>Kutch</span>
                                        <p className='text-center text-white mt-8'>"The White Desert of India" Kutch is probably one of the most beautiful, yet surreal places in India with the vast expanses of the white salt desert. ...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-4 relative bg-[url(assets/images/Destination/4.jpg)] bg-cover bg-center h-[100%]">
                                    <div className="absolute bg-black opacity-50 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>04</span>
                                        <span className='h4 text-white inline-block'>Sabarmati Ashram</span>
                                        <p className='text-center text-white mt-8'>Sabarmati Ashram (also known as Gandhi Ashram) is located in the Sabarmati suburb of Ahmedabad, Gujarat, adjoining the Ashram Road, on the banks of the River Sabarmati</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-5 relative bg-[url(assets/images/Destination/5.jpg)] bg-cover bg-center h-[100%]">
                                    <div className="absolute bg-black opacity-50 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>05</span>
                                        <span className='h4 text-white inline-block'>Dwarka, Gujarat</span>
                                        <p className='text-center text-white mt-8'>Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish, or 'King of Dwarka'..</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-0 cursor-move'>
                                <div className="part-6 relative bg-[url(assets/images/Destination/6.jpg)] bg-cover bg-center h-[100%]">
                                    <div className="absolute bg-black opacity-50 w-[100%] h-[100%]"></div>
                                    <div className="relative z-10 p-5 flex items-center justify-center flex-col">
                                        <span className='mb-3 text-4xl text-[rgb(255,153,0)] font-bold inline-block'>06</span>
                                        <span className='h4 text-white inline-block'>Gir National Park</span>
                                        <p className='text-center text-white mt-8'>Gir National Park and Wildlife Sanctuary, also known as Sasan Gir, is a forest, national park, and wildlife sanctuary near Talala Gir in Gujarat</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Destinations