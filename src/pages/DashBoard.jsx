import React from 'react'
import { useAuth } from '../context/AuthContext'
import LeftContainer from '../components/LeftContainer';
import Header from '../components/Header';
import { ProfileClickProvider, userProfileHover } from '../context/ProfileHoverProvider';
import UserProfile from './UserProfile';
import DashBoardContent from './DashBoardContent';

const DashBoard = () => {
    const {user} = useAuth();
    if(user){
        console.log(user);
    }
  return (
    <ProfileClickProvider>
            <div className='flex flex-row w-full'>
                <LeftContainer />
                <div className='flex flex-col items-center justify-start w-full'>
                    <Header />
                    <div className='flex justify-center'>
                        <UserProfileWrapper />
                    </div>
                    <div>
                        <DashBoardContent />
                    </div>
                </div>
            </div>
        </ProfileClickProvider>
  )
}

const UserProfileWrapper = () => {
    const { showUserProfile } = userProfileHover();

    return showUserProfile ? <UserProfile  /> : null;
};

export default DashBoard