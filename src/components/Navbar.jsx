import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdOutlineCancel } from 'react-icons/md';

import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';

const Button = ({ state, setState, icon }) => {
  return (
    <button
      onClick={() => setState(!state)}
      className='text-light-blue text-xl rounded-full p-3 hover:bg-light-gray'
    >
      {icon}
    </button>
  );
};

const Navbar = ({ activeMenu, setActiveMenu }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [chat, setChat] = useState(false);
  const [notification, setNotification] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative '>
      <div className='flex'>
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          className='text-xl text-light-blue rounded-full p-3 hover:bg-light-gray sm:hidden'
        >
          {activeMenu ? <MdOutlineCancel /> : <AiOutlineMenu />}
        </button>
        <Button
          state={activeMenu}
          setState={setActiveMenu}
          icon={<AiOutlineMenu />}
        />
        <Button state={search} setState={setSearch} icon={<FiSearch />} />
      </div>

      <div className='flex'>
        <Button state={chat} setState={setChat} icon={<BsChatLeft />} />
        <Button
          state={notification}
          setState={setNotification}
          icon={<RiNotification3Line />}
        />
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => setUserProfile(!userProfile)}
        >
          <img
            className='rounded-full w-8 h-8'
            src='data:image/jpeg;base64,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'
            alt=''
          />
          <p>
            <span className='text-gray-400'>Hola,</span>{' '}
            <span className='text-light-blue font-bold ml-1'> Juan </span>
          </p>
          <MdKeyboardArrowDown className='text-light-blue text-xl' />
        </div>

        {chat && <Chat setChat={setChat} />}
        {notification && <Notification setNotification={setNotification} />}
        {userProfile && <UserProfile setUserProfile={setUserProfile} />}
      </div>
    </div>
  );
};

export default Navbar;
