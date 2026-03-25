import { NavLink } from "react-router-dom";
import Telefon from "@/components/Telefon";

const klasaPodnaslov = "text-sm font-semibold uppercase tracking-wider text-white/90";
const klasaRasporedTekst = "whitespace-pre-line text-white/90";

function Footer() {
    const godina = new Date().getFullYear();

    return (
        <footer className="px-8 pt-12 pb-8 bg-tamnocrvena sekcija-senka text-white text-base font-medium">
            <div className="flex flex-col md:flex-row justify-around gap-y-16">
                <div>
                    <h3 className={`mb-4 ${klasaPodnaslov}`}>Meni</h3>
                    <ul className="space-y-3">
                        <li><NavLink className="footer-link" to="/">Početna</NavLink></li>
                        <li><NavLink className="footer-link" to="/pronadji-delove">Pronađi delove</NavLink></li>
                        <li><NavLink className="footer-link" to="/o-nama">O nama</NavLink></li>
                        <li><NavLink className="footer-link" to="/kontakt">Kontakt</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h3 className={`mb-8 ${klasaPodnaslov}`}>Kontaktirajte nas</h3>
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
                    <h3 className="mb-4 text-2xl font-logo-kombi tracking-tight">KOMBI KLUB</h3>
                    <p className={`mb-8 cursor-pointer ${klasaRasporedTekst}`}>
                        {"Obilićev venac 88,\nNiš"}
                    </p>
                    <p className={`mb-4 ${klasaRasporedTekst}`}>
                        {"Pon - Pet\n08:00 - 17:00"}
                    </p>
                    <p className={klasaRasporedTekst}>
                        {"Subota\n08:00 - 14:00"}
                    </p>
                </div>
            </div>

            <p className="mt-16 pt-8 border-t border-white/20 text-center text-sm font-normal text-white">
                Kombi Klub Developer Team © {godina}
            </p>
        </footer>
    );
}

export default Footer;
