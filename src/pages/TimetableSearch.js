import React, { useState, useEffect } from 'react';
import NavigationBar from "../components/navbar";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const CustomEvent = ({ event }) => {
    return (
        <div>
            <strong>{event.title}</strong>
            <br />
            <span>{event.description}</span>
        </div>
    );
};

function TimetableSearch() {
    const localizer = momentLocalizer(moment);
    // state variables for events, selected room, and lesson data
    const [events, setEvents] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    const [lessonData, setLessonData] = useState([]);

    // fetch lesson data from backend on component asynchronously 
    useEffect(() => {
        const fetchAllLessonData = async () => {
            try {
                const response = await fetch('http://localhost/backend/timetable.php');
                if (!response.ok) {
                    throw new Error('Failed to fetch lesson data');
                }
                const data = await response.json();
                if (!data || data.length === 0) {
                    throw new Error('No lesson data found');
                }
                setLessonData(data);
                setEvents(data.map((lesson, index) => {
                    const startTime = moment(lesson.LessonDate + ' ' + lesson.StartTime, 'YYYY-MM-DD HH:mm');
                    const endTime = moment(lesson.LessonDate + ' ' + lesson.EndTime, 'YYYY-MM-DD HH:mm');
                    return {
                        id: index + 1,
                        title: lesson.RoomName,
                        start: startTime.toDate(),
                        end: endTime.toDate(),
                        description: "Lesson"
                    };
                }));
            } catch (error) {
                console.error('Error fetching lesson data:', error);
            }
        };

        fetchAllLessonData();
    }, []);
    // handle room being selected
    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
        // update events based on selection
        if (!room) {
            // display all events, if no room selected
            setEvents(lessonData.map((lesson, index) => {
                const startTime = moment(lesson.LessonDate + ' ' + lesson.StartTime, 'YYYY-MM-DD HH:mm');
                const endTime = moment(lesson.LessonDate + ' ' + lesson.EndTime, 'YYYY-MM-DD HH:mm');
                return {
                    id: index + 1,
                    title: lesson.RoomName,
                    start: startTime.toDate(),
                    end: endTime.toDate(),
                    description: "Lesson"
                };
            }));
        } else {
            // filter events shown by room selected
            const filteredEvents = lessonData.filter(lesson => lesson.RoomName === room);
            setEvents(filteredEvents.map((lesson, index) => {
                const startTime = moment(lesson.LessonDate + ' ' + lesson.StartTime, 'YYYY-MM-DD HH:mm');
                const endTime = moment(lesson.LessonDate + ' ' + lesson.EndTime, 'YYYY-MM-DD HH:mm');
                return {
                    id: index + 1,
                    title: lesson.RoomName,
                    start: startTime.toDate(),
                    end: endTime.toDate(),
                    description: "Lesson"
                };
            }));
        }
    }
    return (
        <div>
            <NavigationBar/>
            <h1 className="text-sky-800 font-poppins text-center text-5xl m-10 font-medium ">Search to View Room Timetables </h1>
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-slate-700 text-center text-lg m-5 px-5 w-2/4">Enter the name of the room you wish to search in the search bar below to display its timetable.</h2>
                <div className="flex items-center">
                    <p>Room:</p>
                    <input type="text" value={selectedRoom} onChange={e => handleRoomSelect(e.target.value)} className="w-full border-2 rounded-lg p-2 mt-1 bg-transparent border-grey-100" />
                </div>    
            </div>

            <div className='p-16'>
                {/* Calendar compnent rendered */}
                <Calendar
                    className="bg-white p-8"
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 600 }}
                    components={{
                        event: CustomEvent
                    }}
                />
            </div>

        </div>
        
    );
}

export default TimetableSearch;