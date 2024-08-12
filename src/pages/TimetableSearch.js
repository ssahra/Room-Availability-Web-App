import React, { useState, useEffect } from 'react';
import NavigationBar from "../components/navbar";



function TimetableSearch() {
    return (
        <div>
            <NavigationBar/>
            <h1 className="text-sky-800 font-poppins text-center text-5xl m-10 font-medium ">Search to View Room Timetables </h1>
            <div className="flex justify-center items-center flex-col">
                <h2 className="text-slate-700 text-center text-lg m-5 px-5 w-2/4">Enter the name of the room you wish to search in the search bar below to display its timetable.</h2>
                <div className="flex items-center">
                    <p>Room:</p>
                    <input type="text"  className="w-full border-2 rounded-lg p-2 mt-1 bg-transparent border-grey-100" />
                </div>
            </div>
        </div>
    )
}

export default TimetableSearch;