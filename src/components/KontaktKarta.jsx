import { FaWhatsapp, FaViber } from "react-icons/fa";
import Telefon from "./Telefon";

const osoba = {
    ime: 'Zivojin Milic',
    broj: '060 600 1780',
    telefon: '381600877647',
    slika: 'https://i.imgur.com/yXOvdOSs.jpg',
};

const boje = {
    crvena: "border-crvena shadow-crvena",
    plava: "border-plava shadow-plava",
    tamnocrvena: "border-tamnocrvena shadow-tamnocrvena",
}

function KontaktKarta({ boja = "crvena" }) {
    return (
        <div className={`p-9 sm:p-10 kol items-center gap-8 rounded-2xl bg-neutral-50 border-4 shadow-[4px_4px_0] ${boje[boja]}`}>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white shadow-[0_4px_12px_-2px_rgb(0_0_0/0.08),0_2px_6px_-2px_rgb(0_0_0/0.06)]">
                <img
                    src={osoba.slika}
                    alt={osoba.ime}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                />
            </div>

            <h2 className="text-xl font-bold text-shadow-2xl text-black/80">
                {osoba.ime}
            </h2>

            <p className="text-2xl font-extrabold tracking-wider">
                {osoba.broj}
            </p>

            <div className="flex gap-10 sm:gap-12">
                <button className="kontakt-dugme bg-violet-500 hover:bg-violet-700"
                    onClick={() => window.location.href = `viber://chat?number=${osoba.telefon}`}
                    aria-label={`Otvori Viber ćaskanje sa ${osoba.ime}`}>
                    <FaViber size={28} />
                </button>

                <Telefon telefon={osoba.telefon} />

                <button className="kontakt-dugme bg-green-500 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/${osoba.telefon}`, "_blank")}
                    aria-label={`Otvori WhatsUp ćaskanje sa ${osoba.ime}`}>
                    <FaWhatsapp size={28} />
                </button>
            </div>
        </div>
    );
}

export default KontaktKarta;
