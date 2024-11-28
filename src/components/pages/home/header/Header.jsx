import { useState } from "react"
import LOGO from "../../../../assets/images/logo/logo.png"
import { MenuList1, MenuList2 } from "./MenuList"
import MarQuee from "./marquee/MaerQee"
const Header = () => {
    return (
        <>
            <header className="p-3 bg-[#e2f2fa] border-b-1 border-[black] w-full fixed top-0 z-40">
                <div className="container-fluid mb-3">
                    <div className="row items-center">
                        <div className="col-xl-3">
                            <div className="logo flex items-center justify-between">
                                <a href="#">
                                    <img src={LOGO} alt="" className="img-fluid" />
                                </a>
                                <div className="toggle d-xl-none">
                                    <a href="#" className=""><i className="fa-solid fa-house text-2xl"></i></a>             
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 flex items-center flex-col">
                            <div className="col-xl-12 d-none d-xl-block">
                                <MenuList1 />
                            </div>
                            <div className="col-xl-12 d-none d-xl-block">
                                <MenuList2 />
                            </div>
                        </div>
                    </div>
                </div>
                <MarQuee />
            </header>
        </>
    )
}
export default Header