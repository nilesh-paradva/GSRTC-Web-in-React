import { Row, Container } from "react-bootstrap"
import LoginImage from "../../../assets/images/logo/logo.png"
import LoginBoxImage from "../../../assets/images/LoginImage/loginimage.jpg"
import generateUniqueId from "generate-unique-id";
import { Link, useNavigate } from "react-router-dom";

const GsrtcLogin = () => {
    const IdGenrate = generateUniqueId({length: 6,useLetters: true});
    const GsrtcBackword = useNavigate();

    const GsrtcBack = () => {
        GsrtcBackword(-1);
    }

    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 flex items-center justify-center">
                        <div className="col-lg-8">
                            <div className="loginform shadow-lg">
                                <div className="login-logo bg-[#e2f2fa] border-b-2 p-3 flex items-center flex-col flex-lg-row gap-3 justify-between">
                                    <img src={LoginImage} alt="Login logo" className="img-fluid" />
                                    <div className="home flex items-center">
                                        <Link to="/" className="px-3 py-2 no-underline bg-[green] rounded-md text-white me-3">Home</Link>
                                        <button onClick={GsrtcBack} className="px-3 py-2 no-underline bg-[green] rounded-md text-white"><i className="fa-solid fa-backward"></i></button>
                                    </div>
                                </div>
                                <div className="loginInputbox pt-12 pb-[11.2rem]">
                                    <div className="row">
                                        <div className="col-12 flex items-center justify-center">
                                            <div className="col-lg-8">
                                                <div className="loginBox bg-red-700 px-3 py-3 rounded-lg overflow-hidden">
                                                    <p className="text-white font-bold" >Please Login to your account</p>
                                                    <form action="" className="bg-[#eee2e2] rounded-lg flex">
                                                        <div className="imageLoginbox flex items-center justify-center d-none d-xl-block">
                                                            <img src={LoginBoxImage} alt="LoginImage" className="img-fluid aspect-square" />
                                                        </div>
                                                        <div className="inputBox p-3">
                                                            <label htmlFor="UserName" className="mb-2 inline-block text-black font-semibold">Username :- </label>
                                                            <input type="text" id="UserName" className=" w-[100%] outline-none px-3 py-[4px] rounded-lg mb-2" />
                                                            <label htmlFor="password" className="mb-2 inline-block text-black font-semibold">Password :- </label>
                                                            <input type="text" id="password" className=" w-[100%] outline-none px-3 py-[4px] rounded-lg" />
                                                            <div className="Captcha-code mt-2">
                                                                <label htmlFor="captcha" className="mb-2 inline-block text-black font-semibold">Captcha Code :- </label>
                                                                <div className="captcha-box flex items-center">
                                                                    <input type="text" id="captchacode" className="w-[50%] me-2 outline-none px-3 py-[4px] rounded-lg" />
                                                                    {/* <input type="text" id="UserName" className="w-[55%] outline-none px-3 py-[4px] rounded-lg"/> */}
                                                                    <div className="captcha w-[55%] outline-none px-3 py-[4px] rounded-lg bg-[#797979]"><p className="m-0 text-center text-xl-start">{IdGenrate}</p></div>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="mt-3 px-3 py-2 text-black font-bold inline-block no-underline bg-[#f66617] rounded-md">Login</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer border-t-2 text-center flex items-center justify-between flex-col flex-lg-row p-2 bg-[#ffffff] shadow-lg pt-3 px-3">
                                <p className="text-[#8b8c8c]">GSRTC RTC © . All rights reserved-Ver#10102024-1500</p>
                                <p className="text-[#8b8c8c]">IP Details:www.gsrtc.in </p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default GsrtcLogin