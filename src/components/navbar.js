import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

const NavigationBar = () => {
    return (
        <div className="bg-white flex">
            <nav className="flex justify-between items-center w-[92%] h-[140px] mx-auto">
                <div className="flex items-center">
                    <div className="inline mr-10">
                        <img src={logo} alt="logo" width="150" height="70" />    
                    </div>
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                        <Link to="/Dashboard" className="hover:text-violet-800">Home</Link>
                        </li>
                        <li>
                        <Link to="/TimetableSearch" className="hover:text-violet-800">Timetable Search</Link>
                        </li>
                        <li>
                        <Link to="/BookRoom" className="hover:text-violet-800">Book A Room</Link>
                        </li>
                        <li>
                        <Link to="/ViewBooking" className="hover:text-violet-800">View Bookings</Link>
                        </li>
                        <li>
                        <Link to="/EmptyRooms" className="hover:text-violet-800">Free Rooms Now</Link>
                        </li>
                        <li>
                        <Link to="/moduleForums" className="hover:text-slate-600 ml-4">Module Forum</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-sky-600 text-white px-5 py-2 rounded-xl hover:bg-sky-800">
                        <Link to="/Login">Sign Out</Link>
                    </button>
                </div>
            </nav>
</div>

      );
};

export default NavigationBar;