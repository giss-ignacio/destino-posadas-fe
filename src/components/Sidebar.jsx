import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";

import { links } from "../data/Estructura";

const Sidebar = ({ activeMenu }) => {
  const activeStyle =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-light-blue text-white text-md m-2";
  const notActiveStyle =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2";
  return (
    <div className="ml-3 bg-white h-screen overflow-auto sm:mt-0 mt-10">
      {activeMenu && (
        <>
          <Link to="/" className="items-center gap-3 ml-3 mt-4 hidden sm:flex">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              role="img"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
            >
              <title></title>
              <path
                d="M 23.948 13.109 C 23.944 13.154 23.922 13.197 23.887 13.226 C 21.384 15.305 19.358 16.153 16.896 16.153 C 15.584 16.153 14.576 15.889 13.905 15.37 C 13.322 14.921 13.015 14.293 13.015 13.558 C 13.015 11.497 15.533 10.558 18.451 9.47 C 19.953 8.909 21.508 8.329 22.934 7.538 C 22.959 7.523 22.988 7.516 23.017 7.516 C 23.037 7.516 23.057 7.52 23.076 7.527 C 23.121 7.544 23.161 7.579 23.178 7.627 C 23.723 9.023 24 10.494 24 12.001 C 23.998 12.371 23.981 12.74 23.948 13.109 Z M 19.138 2.63 C 18.095 3.415 16.558 4.012 14.932 4.642 C 12.995 5.392 10.8 6.245 9.151 7.555 C 7.285 9.042 6.376 10.917 6.376 13.288 C 6.376 15.416 7.259 17.234 8.929 18.549 C 10.802 20.023 13.641 20.804 17.136 20.803 C 18.102 20.803 19.024 20.745 19.879 20.627 C 19.954 20.616 20.027 20.656 20.058 20.725 C 20.09 20.794 20.074 20.875 20.016 20.926 C 17.814 22.908 14.966 23.998 12.001 23.998 C 8.796 23.998 5.782 22.751 3.515 20.483 C 1.249 18.218 0 15.204 0 12.001 C 0 8.796 1.247 5.782 3.515 3.517 C 5.78 1.252 8.794 0.002 12.001 0.002 C 14.591 0.002 17.058 0.815 19.136 2.353 C 19.179 2.385 19.205 2.436 19.205 2.49 C 19.206 2.545 19.181 2.596 19.138 2.63 Z"
                transform="matrix(-0.970296, -0.241922, 0.241922, -0.970296, 20.740486, 26.54661)"
              ></path>
            </svg>{" "}
            <span className="text-xl font-bold">Destino Posadas</span>
          </Link>
          <div className="mt-10 ">
            {links.map((item) => (
              <div>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link}
                    className={({ isActive }) =>
                      isActive ? activeStyle : notActiveStyle
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
