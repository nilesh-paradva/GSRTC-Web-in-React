import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "../../../../App.css"

const Banner = () => {
    const buttonData = ["Advance-Booking", "Divyang-Booking", "State-of-Unity", "Electric-Bus"];
    const [activeTab, setActiveTab] = useState(buttonData[0]);

    return (
        <section className='mt-44'>
            <Container fluid>
                <Row>
                    <div className="col-lg-12">
                        <div className="banner bg-[url('assets/images/banner/banner4.webp')] bg-cover bg-center relative flex items-center justify-center flex-col gap-4 py-52 rounded-lg overflow-hidden">
                            <div className="wrapper absolute inset-0 bg-black opacity-70"></div>
                            <div className="relative z-20 flex items-center justify-center">
                                <ul className="m-0 p-0 flex flex-col flex-lg-row gap-2 nav nav-tabs border-0" role="tablist">
                                    {buttonData.map((data) => (
                                        <li key={data} className={`nav-item rounded-lg overflow-hidden shadow-none bg-[#0099cc] font-2xl   ${activeTab === data ? 'active' : ''}`} role="presentation">
                                            <a href='#javascript:void(0)' className="nav-link no-underline border-0 rounded-lg overflow-hidden" id={`nav-${data}`} data-bs-toggle="tab" data-bs-target={`#${data}`} role="tab" aria-controls={data} aria-selected={activeTab === data} onClick={() => setActiveTab(data)}>{data}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tab-content relative z-20">
                                {buttonData.map((data) => (
                                    <div key={data} className={`tab-pane fade ${activeTab === data ? 'show active' : ''}`} id={data} role="tabpanel" aria-labelledby={`nav-${data}`}>
                                        <form className='flex items-center justify-center flex-col flex-lg-row gap-3'>
                                            <input type="text" placeholder="Source" className="px-3 py-[5px] border-2 rounded-lg outline-none" />
                                            <input type="text" placeholder="Destination" className="px-3 py-[5px] border-2 rounded-lg outline-none" />
                                            <input type="date" className="px-3 py-[5px] border-2 rounded-lg outline-none" />
                                            <select className="px-3 py-[5px] border-2 rounded-lg outline-none">
                                                <option value="-1">Seats</option>
                                                {[1, 2, 3, 4, 5, 6].map(seat => (
                                                    <option key={seat} value={seat}>{seat}</option>
                                                ))}
                                            </select>

                                            {data !== "Divyang-Booking" && (
                                                <label className="inline-block text-white">
                                                    <input type="checkbox" /> Single Lady
                                                </label>
                                            )}
                                            <a href="#" className="bg-red-600 px-3 py-2 rounded-lg text-white inline-block no-underline">Search</a>
                                        </form>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;