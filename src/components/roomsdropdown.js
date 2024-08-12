import React, { useState, useEffect } from 'react';

function Dropdown({ onRoomChange }) {
    const [roomNames, setRoomNames] = useState([]);

    useEffect(() => {
        // Make an AJAX request to fetch room names from the server
        fetch('http://localhost/backend/emptyRooms.php')
            .then(response => response.json())
            .then(data => {
                // Update the state with the received room names
                setRoomNames(data);
            })
            .catch(error => {
                console.error('Error fetching room names:', error);
            });
    }, []);

    const handleRoomChange = (event) => {
        const selectedRoom = event.target.value;
        onRoomChange(selectedRoom);
    };

    return (
        <select onChange={handleRoomChange}>
            <option value=""></option>
            {roomNames.map((room, index) => (
                <option key={index} value={room.id}>{room.name}</option>
            ))}
        </select>
    );
}

export default Dropdown;