import React, { useState } from 'react'
import { MdAccountCircle, MdLogout, MdManageAccounts, MdNotifications, MdStar } from 'react-icons/md'
import { useAuth } from '../context/AuthContext'
import { getAuth, signOut } from 'firebase/auth';
import { getApp } from 'firebase/app';
import { app } from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { userProfileHover } from '../context/ProfileHoverProvider';

const auth = getAuth(app);

const Header = () => {
    const {user} = useAuth();
    const [notificationDropDown, setNotificationDropDown] = useState(false);
    const [profileDropDown, setProfileDropDown] = useState(false);
    const navigate = useNavigate();

    const {handleProfileClick} = userProfileHover();


    const handleLogout = () => {
        console.log('button pressed')
        signOut(auth)
        .then(() => {
            toast.success("Logged out");
            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        .catch((err) => {
            toast.error(`Error ${err.message}`)
            console.log(err.message)

        })
    }
    return (
    <div className='w-full m-3'>
        <header className='px-6 lg:px-8 pb-4 lg:pb-6 pt-6 lg:pt-10 shadow-xl bg-white rounded-[6vw] mb-1 sticky top-0 flex justify-between gap-3 z-[10px] border-t-4 w-full'>

            <form className='flex gap-3 bg-gray-900 rounded-3xl py-3 px-4 lg:max-w-md mt-[-10px] text-white z-[10px] shadow-md'>
                <button className='text-white'>
                    <i data-feather='search' className='w-5 text-white'></i>
                </button>
                <input type="text" placeholder='Search' className='bg-transparent outline-none w-full rounded-3xl' />
            </form>

            <div className='flex gap-2 relative'>
                <div className='flex flex-col'>
                    <MdNotifications className='text-3xl z-0 cursor-pointer' 
                    onMouseEnter={() => setNotificationDropDown(!notificationDropDown)}
                onMouseLeave={() => setNotificationDropDown(!notificationDropDown)}
                    />
                </div>
                    <div className='bg-red-700 w-2 h-2 rounded-full absolute mt-4 right-[90px] z-10'></div>
                <MdManageAccounts className='text-3xl'/>
                <div className='border-2 border-green-400 w-10 rounded-full' 
                    onMouseEnter={() => setProfileDropDown(!profileDropDown)}
                >
                    <img src={user?.photoURL} className='rounded-full'/>
                </div>
            </div>

            
        </header>
        {notificationDropDown && 
        (
                    <div className=" bg-slate-900 p-5 rounded-lg w-fit flex
                    flex-col ml-[30vw] lg:ml-[80vw] mt-[1vw] z-[20px]">
                        <h1 className='text-white font-mono uppercase flex'>
                            1. Congrats! You Just Signed Up. <MdStar className='mt-0 text-yellow-300 text-2xl'/>
                        </h1>
                        <h1 className='text-white font-mono uppercase '>
                            2. Create Crazy Dashboards and share them by tagging us
                        </h1>
                    </div>
        )}

        {profileDropDown &&  !notificationDropDown && (
            <div className=" bg-slate-900 p-5 rounded-lg w-fit flex
                    flex-col ml-[40vw] mt-[1vw] z-[20px] gap-3 lg:ml-[80vw]"
                    onMouseLeave={() => setProfileDropDown(!profileDropDown)}
                    >
                        <h1 className='text-white font-mono uppercase flex gap-2 cursor-pointer' onClick={handleProfileClick}>
                            <MdAccountCircle className='mt-0 text-yellow-300 text-2xl' /> My Profile
                        </h1>
                        <h1 className='text-white font-mono uppercase flex gap-2 cursor-pointer' onClick={() => handleLogout()}>
                            <MdLogout className='mt-0 text-yellow-300 text-2xl'/> Logout
                        </h1>
                    </div>
        )}

        <Toaster />
  </div>
  )
}

export default Header