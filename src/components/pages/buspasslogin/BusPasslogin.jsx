import { Row, Container } from "react-bootstrap";
import LoginImage from "../../../assets/images/logo/logo.png"
import { Link, useNavigate } from "react-router-dom";

const BusPassLogin = () => {
    const navigate = useNavigate();
    
    return (
        <section>
            <Container>
                <Row className="justify-center h-screen items-center">
                    <div className="col-lg-10">
                        <div className="loginform">
                            <div className="login-logo bg-[#e2f2fa] border-b p-3">
                                <img src={LoginImage} alt="Login logo" className="img-fluid" />
                            </div>
                            <div className="home-page bg-[#7688e8]">
                                <Link to="/" className="text-white no-underline text-1xl px-3 py-2 inline-block hover:bg-white group transition-all"><span className="group-hover:text-black">Home</span></Link>
                                <span className="text-white no-underline text-1xl px-3 py-2 inline-block cursor-pointer hover:bg-white group transition-all" onClick={() => navigate(-1)}><span className="group-hover:text-black">Back</span></span>
                            </div>
                            <div className="loginInputbox pt-12 pb-[11.2rem] ps-12 bg-[url('assets/images/busspass/login_BPSbg.jpg')] bg-cover bg-no-repeat">
                                <div className="row">
                                    <div className="col-12 flex items-center">
                                        <div className="col-lg-5">
                                            <div className="loginBox pt-2 rounded-lg overflow-hidden">
                                                <p className="text-white font-bold pb-2">Please Login to your account</p>
                                                <form className="bg-[#eee2e2] rounded-lg">
                                                    <div className="inputBox mt-3 ps-3 pe-3">
                                                        <label htmlFor="UserName" className="block mb-2 text-black font-semibold">Username</label>
                                                        <input type="text" id="UserName" className="w-full outline-none px-3 py-1 rounded-lg mb-2"/>
                                                        <label htmlFor="password" className="block mb-2 text-black font-semibold">Password</label>
                                                        <input type="password" id="password" className="w-full outline-none px-3 py-1 rounded-lg"/>
                                                        <a href="#" className="mt-3 px-3 py-2 text-white font-bold inline-block no-underline bg-[#7688e8] rounded-md">Login</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer flex items-center flex-col flex-lg-row gap-3 justify-between py-3 px-2 bg-white shadow-lg text-center">
                                <p className="text-[#8b8c8c] m-0">GSRTC RTC © . All rights reserved-Ver#10102024-1500</p>
                                <p className="text-[#8b8c8c] m-0">IP Details: www.gsrtc.in</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default BusPassLogin;