import React from 'react';
import NavigationBar from "../components/navbar";
import Dropdown from '../components/roomsdropdown';
import TimePicker from 'react-time-picker';

function BookRoom() {
    return (
        <div className="bg-slate-100 ">
        <NavigationBar />
        <div className="w-full flex items-center justify-center pt-10 ">
            <form  className="flex flex-col w-3/4 bg-white px-10 py-10 rounded-3xl border-2" >
                <h1 className="text-sky-800 font-poppins text-center text-2xl m-10 font-medium ">Booking Request Form</h1>
                <label className="font-bold">First Name</label>
                <input type="text" name="firstName"   placeholder="Enter your first name" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/>

                <label className="font-bold">Surname</label>
                <input type="text" name="surname"  placeholder="Enter your surname" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100" />

                <label className="font-bold">Student ID</label>
                <input type="text" name="studentID" placeholder="Enter your student ID" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100" />

                <label className="font-bold">Select a Room</label>
                <Dropdown />

                <label className="font-bold">Time From</label>
                <p className="text-xs">Bookings can only be made for 2 hours. Bookings made for more that 2 hours will be rejected</p>
                <TimePicker
                    className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"
                    name="timeFrom"
                />

                <label className="font-bold">Time To</label>
                <TimePicker
                    className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"
                    name="timeTo"
                />
                
                <input type="submit" value="Send Request" className="button"  />
            </form>
        </div>
    </div>
    )
}

export default BookRoom;