import { NavLink } from "react-router-dom";

const klasaMeniStavka = "meni-stavka";
const klasaMeniLink = "meni-link";
const klasaMeniAktivan = "meni-aktivan";

function KlasikMeni() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between">
        <li className={klasaMeniStavka}>
          <NavLink
            to="/"
            className={({ isActive }) => `${klasaMeniLink} ${isActive ? klasaMeniAktivan : ""}`}
          >
            Početna
          </NavLink>
        </li>

        <li className={klasaMeniStavka}>
          <NavLink
            to="/pronadji-delove"
            className={({ isActive }) => `${klasaMeniLink} ${isActive ? klasaMeniAktivan : ""}`}
          >
            Pronađi Delove
          </NavLink>
        </li>

        <li className={klasaMeniStavka}>
          <NavLink
            to="/o-nama"
            className={({ isActive }) => `${klasaMeniLink} ${isActive ? klasaMeniAktivan : ""}`}
          >
            O nama
          </NavLink>
        </li>

        <li className={klasaMeniStavka}>
          <NavLink
            to="/kontakt"
            className={({ isActive }) => `${klasaMeniLink} ${isActive ? klasaMeniAktivan : ""}`}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default KlasikMeni;
