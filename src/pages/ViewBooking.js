import React from 'react';
import NavigationBar from "../components/navbar";
import { useLocation } from 'react-router-dom';

function BookingReceived() {
    const location = useLocation(); 
    const bookingId = location.state.bookingId; // get bookingId from location state

    return (
        <div className=" h-screen">
            <NavigationBar/>
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Booking Received!</h1>
                    <p className="text-lg">Your booking (ID: {bookingId}) has been received and will be processed shortly.</p>
                </div>
            </div>
        </div>
    );
}

export default BookingReceived;