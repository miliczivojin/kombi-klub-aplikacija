import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

function BurgerMeni() {
  const [isOtvoren, setOtvoren] = useState(false);

  return (
    <div className='md:hidden'>
      <button
        type="button"
        className="flex justify-center items-center w-12 h-12 min-w-12 min-h-12 rounded-xl text-white hover:bg-white/10 active:bg-white/20 transition-colors duration-200 cursor-pointer"
        onClick={() => setOtvoren(!isOtvoren)}
        aria-label={isOtvoren ? "Close menu" : "Open menu"}
      >
        <span className="inline-flex justify-center items-center">
          {isOtvoren ? <FiX size={32} strokeWidth={2.5} /> : <FiMenu size={32} strokeWidth={2.5} />}
        </span>
      </button>

      <ul className={`${isOtvoren ? "kol" : "hidden"} w-full left-0 top-20 absolute bg-crvena`}>
        <li>
          <NavLink to="/" className={({ isActive }) => `burger-meni-stavka ${isActive ? "meni-aktivan" : ""}`} onClick={() => setOtvoren(false)}>
            Početna
          </NavLink>
        </li>

        <li>
          <NavLink to="/pronadji-delove" className={({ isActive }) => `burger-meni-stavka ${isActive ? "meni-aktivan" : ""}`} onClick={() => setOtvoren(false)}>
            Pronađi Delove
          </NavLink>
        </li>

        <li>
          <NavLink to="/o-nama" className={({ isActive }) => `burger-meni-stavka ${isActive ? "meni-aktivan" : ""}`} onClick={() => setOtvoren(false)}>
            O nama
          </NavLink>
        </li>

        <li>
          <NavLink to="/kontakt" className={({ isActive }) => `burger-meni-stavka ${isActive ? "meni-aktivan" : ""}`} onClick={() => setOtvoren(false)}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMeni;
