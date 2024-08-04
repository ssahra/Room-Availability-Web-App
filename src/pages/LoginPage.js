import React from 'react';
import logo from '../images/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//imr, slc shortcuts

function LoginPage() {

    // state variables for username, password, and error message
    const [curr_username, setUsername] = useState('');
    const [curr_password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // function to update username 
    const usernameChange = (event) => {
        setUsername(event.target.value);
    };

    // function to update password 
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    // function to handle submission of form
    const userSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('Username', curr_username);
        formData.append('Password', curr_password);

        // send form data to PHP script using fetch API
        fetch('http://localhost/backend/login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        // handle response from the server
        .then(data => {
            console.log(data);
            if (data === "Authentication Successful") {
                navigate('/dashboard');
            } else if (data === "Admin Authentication Successful") {
                navigate('/adminBookings');
            } else if (data === "Incorrect password") {
                setErrorMessage('Incorrect password. Please try again.');
            } else if (data === "Username not found") {
                setErrorMessage('Username not found. Please check your username.');
            }
        })
        .catch(error => {
            // console log error when request fails
            console.error('Error:', error);
        });
    };

    return (
        <div className="bg-slate-100 flex w-full h-screen">
            <div className="w-full flex items-center justify-center">  
                <form onSubmit={userSubmit} className="flex flex-col w-1/4 bg-white px-10 py-10 rounded-3xl border-2">
                    <img src={logo} alt="logo" width="150" height="70" className="py-5 mx-auto"/>
                    <label className="font-bold">Username</label>
                    <input value={curr_username} onChange={usernameChange} type="text" placeholder="Enter your username" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/> 
                    <label className="font-bold">Password</label>
                    <input type="password" value={curr_password} onChange={passwordChange} placeholder="Enter your password" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/>
                    
                    <input type="submit" value="Login" className="bg-blue-300 rounded-xl h-10" onSubmit={userSubmit}/>
                    {errorMessage && (
                        <div className="text-red-500">{errorMessage}</div>
                    )}
                </form>
            </div>  
        </div>
    )
}

export default LoginPage;