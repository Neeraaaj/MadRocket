import React from 'react'
import { useAuth } from '../context/AuthContext'
import { TiTick } from "react-icons/ti";

const UserProfile = () => {
    const {user} = useAuth();
  return (
    <div class="h-auto bg-gray-100 mt-10 rounded-2xl">
        <div class="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-green-300 dark:border-green-700-300 mx-auto my-4"
                        src={user?.photoURL} alt="" />
                    
                </div>
                <div class="flex gap-2 px-2">
                    <h1 className='text-white'>
                        <span className='font-mono font-extrabold'>
                            Email: 
                        </span>
                        {user?.email}
                    </h1>
                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <h1 className='font-mono flex gap-3'>
                        Verified User 
                        <TiTick className='text-green-400 bg-white rounded-full mt-1'/>
                    </h1>
                </div>
                <div class="flex">
                    <div class="flex justify-end mr-2">
                        <img class="border-2 border-red-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                        
                        <span
                            class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                            +999
                        </span>
                    </div>
                </div>
            </div>
        </div>
</div>

  )
}

export default UserProfile