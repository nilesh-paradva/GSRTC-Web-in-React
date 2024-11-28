import Android from "../../../../assets/images/main/androidicon.png"
import Ios from "../../../../assets/images/main/ios-icon.png"
import Wallet from "../../../../assets/images/main/walletUser-icon.png"
import Visited from "../../../../assets/images/main/visited-icon.png"

const MainView = () => {
    return(
        <>
            <section className="pt-20 pb-5">
                <div className="container">
                    <div className="row gap-y-4">
                        <h3 className="text-[#123d6f] mb-3">GSRTC Growing Numbers</h3>
                        <div className="col-lg-3">
                            <div className="part-1 flex items-center justify-center flex-col px-3 py-4 rounded-lg" style={{background: 'linear-gradient(to right, #1b0778, #2e1c92, #402eae, #5142ca, #6155e7)'}}>
                                <div className="icon text-center mb-1">
                                    <img src={Android} alt="" className="img-fluid "/>
                                </div>
                                <div className="dis text-center">
                                    <a href="#" className="text-[23px] text-white no-underline inline-block mb-3 hover:underline">Android App Downloaded</a>
                                </div>
                                <div className="viewPart text-center text-white">
                                    <h4>5640059</h4>
                                    <span>As on 24/10/2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="part-1 flex items-center justify-center flex-col px-3 py-4 rounded-lg" style={{background: 'linear-gradient(to right, #7e1253, #90145c, #a21764, #b4196c, #c71b74)'}}>
                                <div className="icon text-center mb-1">
                                    <img src={Ios} alt="" className="img-fluid"/>
                                </div>
                                <div className="dis text-center">
                                    <a href="#" className="text-[23px] text-white no-underline inline-block mb-3 hover:underline">IOS App Downloaded</a>
                                </div>
                                <div className="viewPart text-center text-white">
                                    <h4>702087</h4>
                                    <span>As on 24/10/2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="part-1 flex items-center justify-center flex-col px-3 py-4 rounded-lg" style={{background: 'linear-gradient(to right, #b35d00, #c56400, #d76b00, #ea7200, #fd7900)'}}>
                                <div className="icon text-center mb-1">
                                    <img src={Wallet} alt="" className="img-fluid"/>
                                </div>
                                <div className="dis text-center">
                                    <a href="#" className="text-[23px] text-white no-underline inline-block mb-3 hover:underline">Wallet User Count</a>
                                </div>
                                <div className="viewPart text-center text-white">
                                    <h4>1069311</h4>
                                    <span>As on 24/10/2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="part-1 flex items-center justify-center flex-col px-3 py-4 rounded-lg h-[100%]" style={{background: 'linear-gradient(to right, #0f4c02, #165f05, #1d730a, #238811, #2a9d17)'}}>
                                <div className="icon text-center mb-1">
                                    <img src={Visited} alt="" className="img-fluid"/>
                                </div>
                                <div className="dis text-center">
                                    <p className="text-[23px] text-white no-underline inline-block mb-3">Visitors Count</p>
                                </div>
                                <div className="viewPart text-center text-white">
                                    <span>Over GSRTC Happy Customers</span>
                                    <h4 className="text-transparent">5640059</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainView 