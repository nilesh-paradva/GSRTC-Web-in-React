import { Container, Row } from "react-bootstrap"
import RefundImage from "../../assets/images/logo/logo.png"
import SuportedCenter from "../../assets/images/refundcomplain/home.png"
import NewImage from "../../assets/images/refundcomplain/new.png"
import StatusImage from "../../assets/images/refundcomplain/status.png"

const RefundComplaint = () => {
    return (
        <>
            <section className="RefundComplaint bg-[#ebebeb] h-screen">
                <Container>
                    <Row>
                        <div className="col-12 flex items-center justify-center">
                            <div className="col-8">
                                <div className="Refund_header  shadow-md p-3 bg-[white] w-[100%]">
                                    <div className="refundHeader flex items-center justify-between mb-2">
                                        <div className="logo">
                                            <img src={RefundImage} alt="RefundImage" className="img-fluid" />
                                        </div>
                                        <div className="sign flex items-center">
                                            <p className="m-0 pe-2">Get user</p> |
                                            <a href="#" className="no-underline ps-2 inline-block">Sign in</a>
                                        </div>
                                    </div>
                                    <div className="serviceMenu p-3 ">
                                        <div className="services bg-[#cac9ca] flex items-center rounded-lg">
                                            <div className="Support_home pe-3">
                                                <a href="#" className="no-underline p-2 inline-block hover:bg-[#ededed] transition-all rounded-lg"><img src={SuportedCenter} alt="supportedCenterHome" className="img-fluid inline-block pe-1" /><span className="text-black ps-1">Support Center Home</span></a>
                                            </div>
                                            <div className="New-ticket pe-3">
                                                <a href="#" className="no-underline hover:bg-[#ededed] inline-block p-2 transition-all rounded-lg"><img src={NewImage} alt="supportedCenterHome" className="img-fluid inline-block pe-1" /><span className="ps-1 text-black">Open a New Ticket</span></a>
                                            </div>
                                            <div className="check-ticket">
                                                <a href="#" className="no-underline hover:bg-[#ededed] inline-block p-2 transition-all rounded-lg"><img src={StatusImage} alt="supportedCenterHome" className="img-fluid inline-block pe-1" /><span className="ps-1 text-black">Check Ticket Status</span></a>
                                            </div>
                                        </div>
                                        <div className="discription mt-2">
                                            <p className="font-bold text-2xl text-[#0ab2f1] m-0">Open a New Ticket</p>
                                            <p className="mt-1">Please fill in the form below to open a new ticket.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RefundComplaint