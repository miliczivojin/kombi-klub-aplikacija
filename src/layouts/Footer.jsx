import { NavLink } from "react-router-dom";
import Telefon from "@/components/Telefon";

function Footer() {
    return (
        <footer className="px-6 py-10 flex flex-col md:flex-row justify-around gap-14 bg-tamnocrvena sekcija-senka text-white text-base font-medium">
            <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/90">Meni</h3>
                <ul className="space-y-3">
                    <li><NavLink className="footer-link" to="/">Početna</NavLink></li>
                    <li><NavLink className="footer-link" to="/pronadji-delove">Pronađi delove</NavLink></li>
                    <li><NavLink className="footer-link" to="/o-nama">O nama</NavLink></li>
                    <li><NavLink className="footer-link" to="/kontakt">Kontakt</NavLink></li>
                </ul>
            </div>

            <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/90">Kontaktirajte nas</h3>
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
                <h3 className="mb-3 text-2xl font-logo-kombi tracking-tight">KOMBI KLUB</h3>
                <p className="mb-6 whitespace-pre-line cursor-pointer text-white/95">
                    {"Obilićev venac 88,\nNiš"}
                </p>
                <p className="mb-4 whitespace-pre-line text-white/95">
                    {"Pon - Pet\n08:00 - 17:00"}
                </p>
                <p className="whitespace-pre-line text-white/95">
                    {"Subota\n08:00 - 14:00"}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
