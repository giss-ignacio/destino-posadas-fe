import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdOutlineCancel } from "react-icons/md";

import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const Button = ({ state, setState, icon }) => {
  return (
    <button
      onClick={() => setState(!state)}
      className="text-light-blue text-xl rounded-full p-3 hover:bg-light-gray"
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

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative ">
      <div className="flex">
        <button
          onClick={() => setActiveMenu(!activeMenu)}
          className="text-xl text-light-blue rounded-full p-3 hover:bg-light-gray sm:hidden"
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

      <div className="flex">
        <Button state={chat} setState={setChat} icon={<BsChatLeft />} />
        <Button
          state={notification}
          setState={setNotification}
          icon={<RiNotification3Line />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setUserProfile(!userProfile)}
        >
          <img
            className="rounded-full w-8 h-8"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
            alt=""
            width="50px"
            height="50px"
          />
          <p>
            <span className="text-gray-400">Hola,</span>{" "}
            <span className="text-light-blue font-bold ml-1">
              {" "}
              Administrador{" "}
            </span>
          </p>
          <MdKeyboardArrowDown className="text-light-blue text-xl" />
        </div>

        {chat && <Chat setChat={setChat} />}
        {notification && <Notification setNotification={setNotification} />}
        {userProfile && <UserProfile setUserProfile={setUserProfile} />}
      </div>
    </div>
  );
};

export default Navbar;
