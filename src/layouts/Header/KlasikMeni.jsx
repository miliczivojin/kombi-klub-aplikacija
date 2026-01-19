import { NavLink } from "react-router-dom";

function KlasikMeni() {
  return (
    <nav className="hidden md:block">
      <ul className='flex items-center justify-between'>
        <li className='meni-stavka'>
          <NavLink to="/" className={({ isActive }) => `meni-link ${isActive ? "meni-aktivan" : ""}`}>
            Početna
          </NavLink>
        </li>

        <li className='meni-stavka'>
          <NavLink to="/pronadji-delove" className={({ isActive }) => `meni-link ${isActive ? "meni-aktivan" : ""}`}>
            Pronađi Delove
          </NavLink>
        </li>

        <li className='meni-stavka'>
          <NavLink to="/o-nama" className={({ isActive }) => `meni-link ${isActive ? "meni-aktivan" : ""}`}>
            O nama
          </NavLink>
        </li>

        <li className='meni-stavka'>
          <NavLink to="/kontakt" className={({ isActive }) => `meni-link ${isActive ? "meni-aktivan" : ""}`}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default KlasikMeni;
