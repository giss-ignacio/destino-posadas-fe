import React from "react";
import { FiCreditCard } from "react-icons/fi";
import { BsShield, BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const UserProfile = ({ setUserProfile }) => {
  
  function handleLogout() {
    sessionStorage.setItem("token", "");
    window.location.reload();
  }

  return (
    <div className="nav-item absolute top-16 right-10 bg-white p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Perfil de usuario</p>

        <div>
          <button
            className="text-2xl text-gray-500 rounded-md"
            onClick={() => setUserProfile(false)}
          >
            <MdOutlineCancel />
          </button>
        </div>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-26 w-26"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          alt=""
          width="50px"
          height="50px"
        />
        <div>
          <p className="font-semibold text-xl">Administrador</p>
          <p className="text-gray-500 text-sm">Administrador</p>
          <p className="text-gray-500 text-sm font-semibold">
            admin@destino-posadas.com
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer">
          <button className=" text-light-blue bg-icon-light-blue text-xl rounded-lg p-3 hover:bg-light-gray">
            <BsCurrencyDollar />
          </button>

          <div>
            <p className="font-semibold ">Mi Perfil</p>
            <p className="text-gray-500 text-sm">Preferencias de cuenta</p>
          </div>
        </div>
        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer">
          <button className=" text-icon-light-green bg-icon-light-green text-xl rounded-lg p-3 hover:bg-light-gray">
            <BsShield />
          </button>
          <div>
            <p className="font-semibold ">Mis mensajes</p>
            <p className="text-gray-500 text-sm">Mensajes y Emails</p>
          </div>
        </div>
        <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer">
          <button className=" text-icon-light-red bg-icon-light-orange text-xl rounded-lg p-3 hover:bg-light-gray">
            <FiCreditCard />
          </button>
          <div>
            <p className="font-semibold ">Mis tareas</p>
            <p className="text-gray-500 text-sm">Tareas diarias y pendientes</p>
          </div>
        </div>
      </div>
      <div>
      <form onSubmit={handleLogout}>
        <button className="bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4 w-full">Logout
        </button>
      </form>
      </div>
    </div>
  );
};

export default UserProfile;
