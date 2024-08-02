import React from 'react';
import logo from '../images/logo.png';
//imr, slc shortcuts

function LoginPage() {
    return (
        <div className="bg-slate-100 flex w-full h-screen">
            <div className="w-full flex items-center justify-center">  
                <form className="flex flex-col w-1/4 bg-white px-10 py-10 rounded-3xl border-2">
                    <img src={logo} alt="logo" width="150" height="70" className="py-5 mx-auto"/>
                    <label className="font-bold">Username</label>
                    <input type="text" placeholder="Enter your username" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/> 
                    <label className="font-bold">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full border-2 rounded-xl p-4 mt-1 bg-transparent border-grey-100"/>
                    <input type="submit" value="Logi" className="button" />
                </form>
            </div>  
        </div>
    )
}

export default LoginPage;