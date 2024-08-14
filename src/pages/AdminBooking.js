import React, { useState, useEffect } from "react";
import NavigationBar from "../components/navbar";


function AdminBooking() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/adminBooking.php')
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAccept = (bookingId) => {
        console.log('Booking ID:', bookingId);
        fetch('http://localhost/backend/adminBooking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookingId: bookingId,
                status: 'Accepted',
            })
        })
        .then(response => response.json())
        .then(data => {
            // update the bookings state
            if (data.message) {
                setBookings(data.bookings);
            }
        })
        .catch(error => console.error('Error updating booking status:', error));
    };

    const handleReject = (bookingId) => {
        fetch('http://localhost/backend/adminBooking.php', { 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookingId: bookingId,
                status: 'Rejected'
            })
        })
        .then(response => response.json())
        .then(data => {
            // update bookings state
            if (data.message) {
                setBookings(data.bookings);
            }
        })
        .catch(error => console.error('Error updating booking status:', error));
    };
    return (
        <div className="bg-slate-100 ">
            <NavigationBar/>
            <div className="w-full flex items-center justify-center pt-10 ">
                <div className="w-3/4 bg-white px-10 py-10 rounded-3xl border-2">
                    <h1 className="text-sky-800 font-poppins text-center text-2xl m-10 font-medium">Admin Bookings</h1>
                    <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 p-3">Name</th>
                            <th className="border border-gray-300 p-3">Room</th>
                            <th className="border border-gray-300 p-3">Time</th>
                            <th className="border border-gray-300 p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {bookings.map(booking => (
                                <tr key={booking.id}>
                                    <td className="border border-gray-300 p-3">{booking.FirstName} {booking.Surname}</td>
                                    <td className="border border-gray-300 p-3">{booking.RoomName}</td>
                                    <td className="border border-gray-300 p-3">{booking.TimeFrom}</td>
                                    
                                    <td className="border border-gray-300 p-3">
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleAccept(booking.BookingID)}>
                                         Accept
                                        </button>
                                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => handleReject(booking.BookingID)}>
                                            Reject
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminBooking;