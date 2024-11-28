import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Android from "../../../../assets/images/main/androidicon.png"
import Ios from "../../../../assets/images/main/ios-icon.png"
import Facebook from "../../../../assets/images/main/facebook.png"
import Twitter from "../../../../assets/images/main/twitter.png"
import Browser from "../../../../assets/images/main/browser_compatibility.png"

const Footer = () => {
    return (
        <>
            <footer className='py-5 bg-[#173c62]'>
                <Container>
                    <Row className='gap-y-4'>
                        <div className="col-lg-3">
                            <div className="footerPart-1">
                                <ul>
                                    {[{ footerList: "About Us", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Leadership", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Special services", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Achievements", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Tenders", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "FAQs", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }].map((data) => {
                                        return (
                                            <li key={data.footerList} className='flex items-center mb-1'>
                                                <span className='text-[#ffffee] pe-2'>{data.footerIcon}</span>
                                                <a href="#" className='no-underline text-white'><span className='hover:text-[#ffff99] transition-all'>{data.footerList}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footerPart-1">
                                <ul>
                                    {[{ footerList: "Booking Policies", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Right to information", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Divisions", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Corporate Office", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Performance", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Bus Enquiry", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }].map((data) => {
                                        return (
                                            <li key={data.footerList} className='flex items-center mb-1'>
                                                <span className='text-[#ffffee] pe-2'>{data.footerIcon}</span>
                                                <a href="#" className='no-underline text-white'><span className='hover:text-[#ffff99] transition-all'>{data.footerList}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footerPart-1">
                                <ul>
                                    {[{ footerList: "Recruitment", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Contact Us", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Awards", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "GSRTC Direct Agents List", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "GSRTC Franchisee Agents List", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Blacklisted Agencies", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Details of Grievance Redressal Officers for Persons with Disabilities", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }].map((data) => {
                                        return (
                                            <li key={data.footerList} className='flex mb-1'>
                                                <span className='text-[#ffffee] pe-2'>{data.footerIcon}</span>
                                                <a href="#" className='no-underline text-white'><span className='hover:text-[#ffff99] transition-all'>{data.footerList}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footerPart-1">
                                <ul>
                                    {[{ footerList: "Gujarat Pavitra Yatradham Vikas Board, Gandhinagar", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Download", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Privacy Policy", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "India Code", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }, { footerList: "Pravasi-Helpdesk", footerIcon: <i className="fa-solid fa-circle-chevron-right"></i> }].map((data) => {
                                        return (
                                            <li key={data.footerList} className='flex mb-1'>
                                                <span className='text-[#ffffee] pe-2'>{data.footerIcon}</span>
                                                <a href="#" className='no-underline text-white'><span className='hover:text-[#ffff99] transition-all'>{data.footerList}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className="hr">
                    <Container fluid>
                        <div className="hr border-1 rounded-lg border-[#FFCC00]"></div>
                    </Container>
                </div>
                <div className="lastFooter pt-4">
                    <Container>
                        <Row className='gap-y-4'>
                            <div className="col-lg-4">
                                <div className="lastFooter-part-1 text-white text-center text-lg-start">
                                    <span className='block'>© GSRTC. All Rights Reserved.</span>
                                    <span>Last Updated: 24/10/2024, 40:45 pm</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="lastFooter-part-2 text-white">
                                    <div className="appDownload-dis flex items-center flex-col">
                                        <div className="appDownload flex items-center mb-2">
                                            <a href="#" className='flex items-center no-underline text-white'><img src={Android} alt="android" className='img-fluid w-[40px]' /><span className='pe-3 hover:text-[#ffff99] transition-all'>Download Android App</span></a>|<a href="#" className='flex items-center no-underline text-white ps-[9px]'><img src={Ios} alt="ios" className='img-fluid w-[40px]' /><span className='hover:text-[#ffff99] transition-all'>Download IOS App</span></a>
                                        </div>
                                        <div className="dis">
                                            <p className='text-center text-[20px]'>Toll Free Number : 1800 233 666666</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 flex items-center justify-content-lg-end justify-center">
                                <div className="socialize flex items-center flex-col">
                                    <span className='block text-white'>Let's socialize</span>
                                    <div className="socialIcon flex">
                                        <a href="#" className='pe-2'><img src={Facebook} alt="" className='img-fluid'/></a><a href="#"><img src={Twitter} alt="" className='img-fluid'/></a>
                                    </div>
                                    <span className='block text-white mt-2'>Browser Compatibility</span>
                                    <div className="socialIcon flex">
                                        <img src={Browser} alt="" className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}
export default Footer