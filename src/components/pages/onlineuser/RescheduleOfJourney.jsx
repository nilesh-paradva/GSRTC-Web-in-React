import { Container, Row } from "react-bootstrap"
import ReschedulImage from "../../../assets/images/rescheduledrop/logo.png"
import SearchTicket from "../../../assets/images/rescheduledrop/searchTicket.jpg"
import SearchDate from "../../../assets/images/rescheduledrop/date.jpg"


const RescheduleOfjourney = () => {
    return (
        <>
            <header className="rescheduleOfjourney bg-[#7688e8] py-2">
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="RescheduleHeader">
                                <Row className="items-center">
                                    <div className="col-2">
                                        <div className="logo">
                                            <a href="#"><img src={ReschedulImage} alt="rescheduleLogo" className="img-fluid" /></a>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="headerDiscription text-center">
                                            <h4 className="text-white">Enjoy the rich heritage & warm hospitality of Gujarat with GSRTC ...</h4>
                                            <p className="m-0 text-2xl text-[#e7fd09]">Avail Discount on premium and non premium services</p>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="home text-end">
                                            <a href="#" className="no-underline text-white">HOME</a>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </header>
            <section>
                <Container>
                    <Row>
                        <div className="col-12">
                            <div className="main-discription text-center py-3 border-b">
                                <h4 className="tracking-widest">RESCHEDULE YOUR JOURNEY</h4>
                                <p className="m-0">Verify your Details and <span className="font-bold">Re-Schedule</span> your Journey Tickets</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="rescheduleForm border-b flex items-center justify-center">
                                <div className="col-8">
                                    <div className="Re-schedulInput py-14">
                                        <form action="" className="flex justify-around items-center">
                                            <div className="PNR-number">
                                                <label htmlFor="PNR-Number" className="pe-2">PNR Number : </label>
                                                <input type="text" id="PNR-Number" className="border-2 rounded-md outline-none px-1 py-[5px]" />
                                            </div>
                                            <p className="m-0 inline-block px-2">+</p>
                                            <div className="mobileumber">
                                                <label htmlFor="Mobile-No" className="pe-2">Mobile No : </label>
                                                <input type="text" id="Mobile-No" className="border-2 rounded-md outline-none px-1 py-[5px]" />
                                            </div>
                                            <div className="button inline-block">
                                                <a href="#" className="px-3 py-2 rounded-lg no-underline bg-red-700 text-white">Submit</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="need-help py-5">
                                <div className="need-help-btn text-center">
                                    <a href="#" className="px-3 py-2 rounded-lg text-white bg-red-600 no-underline inline-block">Need Help?</a>
                                </div>
                                <Row>
                                    <div className="col-6">
                                        <div className="searchTicket flex items-center">
                                            <div className="image">
                                                <img src={SearchTicket} alt="searchticket" className="img-fluid" />
                                            </div>
                                            <div className="SearchDescription ps-5">
                                                <h5 className="mb-2">Search Ticket:</h5>
                                                <p className="m-0 tracking-tighter">Enter your PNR Number and Transaction Password and Submit and enter OTP Number and Reschedule.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="searchTicket flex items-center">
                                            <div className="image">
                                                <img src={SearchDate} alt="searchticket" className="img-fluid" />
                                            </div>
                                            <div className="SearchDescription ps-5">
                                                <h5 className="mb-2">Search Ticket:</h5>
                                                <p className="m-0 tracking-tighter">Enter your PNR Number and Transaction Password and Submit and enter OTP Number and Reschedule.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <footer className="re-schedule-footer bg-[#999999]">
                <Container fluid>
                    <Row>
                        <div className="col-12">
                            <div className="Reschedulfooter text-center py-4">
                                <p className="m-0 text-1xl text-white">© <span className="font-bold">GSRTC</span> All Rights Reserved 2019</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default RescheduleOfjourney