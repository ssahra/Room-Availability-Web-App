import React, { useState } from "react";
import NavigationBar from "../components/navbar";
import Dropdown from '../components/roomsdropdown';
import TimePicker from 'react-time-picker';
import { useNavigate } from 'react-router-dom';

function BookRoom() {
    const navigate = useNavigate();
    const [bookingId, setBookingId] = useState(null);
    const [errors, setErrors] = useState({});
    // state variables for form data
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        studentID: '',
        room: '',
        timeFrom: '', 
        timeTo: '',
    });
    
    // function to update selected room in dopdown
    const handleRoomChange = (selectedRoom) => {
        setFormData(prevState => ({
            ...prevState,
            room: selectedRoom
        }));
    };

    // function to handle input field changes and update form data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const userSubmit = (event) => {
        event.preventDefault();
        
        
        // form data
        const form = new FormData();
        for (let key in formData) {
            form.append(key, formData[key]);
        }

        // send form data to backend using fetch API
        fetch('http://localhost/backend/studentBookingReq.php', {
            method: 'POST',
            body: form
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes("New records inserted successfully")) {
                const bookingId = data.split(": ")[1];
                setBookingId(bookingId);
                navigate('/bookingReceived', { state: { bookingId } }); // Pass bookingId as state
            }  
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    return (
<div className="bg-slate-100 ">
            <NavigationBar />
            <div className="w-full flex items-center justify-center pt-10 ">
                <form onSubmit={userSubmit} className="flex flex-col w-3/4 bg-white px-10 py-10 rounded-3xl border-2" >
                    <h1 className="text-sky-800 font-poppins text-center text-2xl m-10 font-medium ">Booking Request Form</h1>
                    <label className="font-bold">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}  placeholder="Enter your first name" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/>

                    <label className="font-bold">Surname</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100" />

                    <label className="font-bold">Student ID</label>
                    <input type="text" name="studentID" value={formData.studentID} onChange={handleChange} placeholder="Enter your student ID" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100" />

                    <label className="font-bold">Select a Room</label>
                    <Dropdown onRoomChange={handleRoomChange} />

                    <label className="font-bold">Time From</label>
                    <p className="text-xs">Bookings can only be made for 2 hours. Bookings made for more that 2 hours will be rejected</p>
                    <TimePicker
                        className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"
                        name="timeFrom"
                        value={formData.timeFrom}
                        onChange={value => setFormData(prevState => ({ ...prevState, timeFrom: value }))}
                    />

                    <label className="font-bold">Time To</label>
                    <TimePicker
                        className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"
                        name="timeTo"
                        value={formData.timeTo}
                        onChange={value => setFormData(prevState => ({ ...prevState, timeTo: value }))}
                    />
                    
                    <input type="submit" value="Send Request" className="button"  />
                </form>
            </div>
        </div>
    )
}

export default BookRoom;