import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from "react-bootstrap";

export const MenuList1 = () => {
    return (
        <>
            <ul className="flex items-center justify-between p-0 m-0">
                {/* {[{listName : "Live Tracking(Android)", icon: <i className="fa-brands fa-android text-[#1f8230]"></i>},{listName : "Live Tracking(ios)", icon : <i className="fa-brands fa-apple text-[#999999]"></i>},{listName : "GSRTC Login"},{listName : "Bus Pass Login"},{listName : <span className="text-red-800">1800 233 666666</span>, icon : <i className="fa-solid fa-phone text-red-800"></i>},{listName: <span className="text-red-800">Alert<i className="fa-solid fa-exclamation text-red-800 ps-[2px]"></i></span>},{listName : "English"},{listName : "Gujarati"},
                ].map((data) => {
                    return(
                        <li key={data.listName} className="flex items-center p-0 m-0"><a href="#" className="inline-block no-underline text-[#323131]"><span className="pe-2 text-2xl">{data.icon}</span>{data.listName}</a></li>
                    )
                })} */}
                <li className="p-0 m-0"><Link to="#" className="inline-block no-underline text-[#323131]"><i className="fa-brands fa-android text-[#1f8230] pe-1 text-2xl"></i>Live Tracking</Link></li>
                <li className="p-0 m-0"><Link to="#" className="inline-block no-underline text-[#323131]"><i className="fa-brands fa-apple text-[#999999] pe-1 text-2xl"></i>Live Tracking</Link></li>
                <li className="p-0 m-0"><Link to="/gsrtcLogin" className="inline-block no-underline text-[#323131]">GSRTC Login</Link></li>
                <li className="p-0 m-0"><Link to="/busPassLogin" className="inline-block no-underline text-[#323131]">Bus Pass Login</Link></li>
                <li className="p-0 m-0"><Link to="#" className="inline-block no-underline text-[#323131]"><i className="fa-solid fa-phone text-red-800"></i>1800 233 666666</Link></li>
                <li className="p-0 m-0"><Link to="#" className="inline-block no-underline text-[#323131]">Alert!</Link></li>
                <li className="p-0 m-0"><Link to="#" className="inline-block no-underline text-[#323131] pe-1">English</Link> | <Link href="#" className="inline-block no-underline text-[#323131] ps-1">Gujarati</Link></li>
            </ul>
        </>
    )
}

export const MenuList2 = () => {
    return (
        <>
            <ul className="flex justify-between p-0 m-0 mt-3">
                {/* {[{listName : "Live Tracking(Android)", icon: <i className="fa-brands fa-android"></i>},{listName : "Live Tracking(ios)", icon : <i className="fa-brands fa-apple"></i>},{listName : "GSRTC Login"},{listName : "Bus Pass Login"},{listName : "1800 233 666666", icon : <i className="fa-solid fa-phone"></i>},{listName : "English"},{listName : "Gujarati"},
                ].map((data) => {
                    return(
                        <li key={data.listName} className="flex items-center p-0 m-0"><a href="#" className="inline-block no-underline"><span className="pe-2 text-2xl">{data.icon}</span>{data.listName}</a></li>
                    )
                })} */}
                <li>
                    <DropdownButton id="dropdown-basic-button" title="Online User">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </li>
                <li><a href="#" className="no-underline text-[#000]">Track Bus</a></li>
                <li><a href="#" className="no-underline text-[#000]">Agent Login</a></li>
                <li><a href="#" className="no-underline text-[#000]">Sharvan Tirth Darshan</a></li>
                <li><a href="#" className="no-underline text-[#000]">Bus Pass</a></li>
                <li><a href="#" className="no-underline text-[#000]">Unity Bokking</a></li>
                <li><a href="#" className="no-underline text-[#000]">Press Release</a></li>
            </ul>
        </>
    )
}

export default MenuList2