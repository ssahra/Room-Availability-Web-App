import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, time, type) {
  return { name, time, type };
}

const rows = [
  createData('CL4.06', '30 min', 'Computer Room'),
  createData('CL4.06', '30 min', 'Computer Room'),
  createData('CL4.06', '30 min', 'Computer Room'),
  createData('CL4.06', '30 min', 'Computer Room'),
  createData('CL4.06', '30 min', 'Computer Room')
];

function AvailableRoomsTable({ type }) {
    //const [availableRooms, setAvailableRooms] = useState([]);
    //const [filteredRooms, setFilteredRooms] = useState([]);
    const [room, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/availableTable.php')
            .then(response => response.json())
            .then(data => {
                setRooms(data);
            })
            .catch(error => {
                console.error('Error fetching available rooms:', error);
            });
    }, []);



    return (
        <div>
        <TableContainer component={Paper} style={{ maxHeight: 400 }}>
            <Table sx={{ minWidth: 470 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: '33%', fontWeight: 'bold' }}>Room Name</TableCell>
                        <TableCell style={{ width: '33%', fontWeight: 'bold' }} align="center">Free For: </TableCell>
                        <TableCell style={{ width: '33%', fontWeight: 'bold' }} align="center">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {room.map((room, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {room.roomName}
                            </TableCell>
                            <TableCell align="center">{room.duration}</TableCell>
                            <TableCell align="center">{room.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
}

export default AvailableRoomsTable;