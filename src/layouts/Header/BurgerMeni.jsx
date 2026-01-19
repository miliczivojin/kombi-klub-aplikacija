import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

function BurgerMeni() {
  const [isOtvoren, setOtvoren] = useState(false);

  return (
    <div className='md:hidden'>
      <button className='cursor-pointer' onClick={() => { setOtvoren(!isOtvoren) }} aria-label="Otvori navigacioni meni">
        <FiMenu size={48} color='white' />
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
