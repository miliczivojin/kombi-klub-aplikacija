import { NavLink } from "react-router-dom";
import Telefon from "@/components/Telefon";

function Footer() {
    return (
        <footer className="px-4 py-8 flex flex-col md:flex-row justify-around gap-12 bg-tamnocrvena sekcija-senka text-white text-lg font-semibold">
            <div>
                <h3 className="mb-8 text-xl">Meni</h3>
                <ul className="space-y-2">
                    <li><NavLink className="footer-link" to="/">Početna</NavLink></li>
                    <li><NavLink className="footer-link" to="/pronadji-delove">Pronađi delove</NavLink></li>
                    <li><NavLink className="footer-link" to="/o-nama">O nama</NavLink></li>
                    <li><NavLink className="footer-link" to="/kontakt">Kontakt</NavLink></li>
                </ul>
            </div>

            <div>
                <h3 className="mb-8 text-xl">Kontaktirajte nas</h3>
                <div className="mb-4 flex items-center gap-4">
                    <a href="tel:+381600877647">060 600 1780</a>
                    <Telefon telefon="381600877647" />
                </div>
                <p>
                    <a href="mailto:kombiklub.nis@gmail.com">
                        kombiklub.nis@gmail.com
                    </a>
                </p>
            </div>

            <div>
                <h3 className="mb-2 text-3xl font-logo-kombi">KOMBI KLUB</h3>
                <p className="mb-8 whitespace-pre-line cursor-pointer">
                    {"Obilićev venac 88,\nNiš"}
                </p>
                <p className="mb-4 whitespace-pre-line">
                    {"Pon - Pet\n08:00 - 17:00"}
                </p>
                <p className="whitespace-pre-line">
                    {"Subota\n08:00 - 14:00"}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
