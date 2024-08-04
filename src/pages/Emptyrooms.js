import React, { useState, useEffect } from 'react';
import AvailableRoomsTable from '../components/availableRoomsTable';
import NavigationBar from "../components/navbar";

function Emptyrooms() {
    
    return (
        
        <div name='main-div' className="bg-slate-50">
            <NavigationBar/>

            <div className='second-half'>
                <h1 className="font-poppins text-center text-6xl m-20 font-medium">Available Rooms Now</h1>

                <div className='rooms-now-container' style={{ width: '100%' }}> 
                    <div className='copland-list' style={{ width: '100%' }}> 
                        
                        <AvailableRoomsTable type="copland" /> 
                    </div>
                    
                </div>
            </div>
            
        </div> 
    );

}

export default Emptyrooms;