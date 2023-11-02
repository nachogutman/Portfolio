import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import { FavoritesContext } from "../context/FavoritesContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const { favsList } = useContext(FavoritesContext)

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">

        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/favorites" onClick={toggleClass}>
              <div>
                <img src="../Images/corazonRelleno.png" style={{ top: '40%', width: '35px', top: '50%',
                  left: '50%',
                  transform: 'translate(0, 50%)', }} />
                <p style={{
                  color: 'rgb(24, 22, 34)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(0, -50%)',
              }}> {favsList.length} </p>
            </div>

          </NavLink>
        </li>
      </ul>
    </nav>
    </header >
  );
}

export default Header;
