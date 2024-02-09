import { useState, useContext, createContext } from 'react';

const ProfileClickContext = createContext();

export const ProfileClickProvider = ({ children }) => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleProfileClick = () => {
    setShowUserProfile(true);
  };

  const closeUserProfile = () => {
    setShowUserProfile(false);
  };

  return (
    <ProfileClickContext.Provider value={{ showUserProfile, handleProfileClick, closeUserProfile }}>
      {children}
    </ProfileClickContext.Provider>
  );
};

export const userProfileHover = () => {
  const context = useContext(ProfileClickContext);
  if (!context) {
    throw new Error('useProfileClick must be used within a ProfileClickProvider');
  }
  return context;
};