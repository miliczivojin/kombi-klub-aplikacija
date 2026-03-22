import { FaWhatsapp, FaViber } from "react-icons/fa";
import { BadgeCheck, FolderOpen } from "lucide-react";
import Telefon from "@/components/Telefon";

const osoba = {
    ime: "Mihajlo Mihajlovic",
    telefon: "381600877647",
    slika: "https://i.imgur.com/yXOvdOSs.jpg",
};

const ikonaBoja = {
    crvena: "text-crvena",
    plava: "text-plava",
    tamnocrvena: "text-tamnocrvena",
};

const radnikOpis = {
    crvena: "Putnički i kombi program",
    plava: "Azijski putnički i kombi program",
    tamnocrvena: "Teretni i dostavni program",
};

function KontaktKarta({ boja = "crvena", ikona = "badge-check", className = "" }) {
    const bojaIkona = ikonaBoja[boja] ?? "text-neutral-600";
    const opisRadnika = radnikOpis[boja] ?? "Specijalizovani prodajni program";

    return (
        <article className={`kontakt-karta-id w-11/12 max-w-[20rem] md:max-w-md mx-0 p-4 kol gap-6 md:gap-4 relative ${className}`.trim()}>
            <div className={`absolute top-4 right-4 ${bojaIkona}`} aria-hidden>
                {ikona === "file" ? (
                    <FolderOpen className="w-8 h-8" strokeWidth={1.8} />
                ) : (
                    <BadgeCheck className="w-8 h-8" strokeWidth={1.8} />
                )}
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4">
                <div className="rounded-xl overflow-hidden flex-shrink-0 w-28 h-28 shadow-md ring-1 ring-black/5">
                    <img
                        src={osoba.slika}
                        alt={osoba.ime}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="kol justify-end min-h-0 md:min-h-[6rem] text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight text-neutral-900">
                        {osoba.ime}
                    </h2>
                    <p className="text-sm md:text-base font-normal text-neutral-500">
                        {opisRadnika}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 w-full gap-3 mt-4">
                <button
                    className="kontakt-dugme kontakt-karta-dugme text-violet-500 w-full"
                    onClick={() => (window.location.href = `viber://chat?number=${osoba.telefon}`)}
                    aria-label={`Viber sa ${osoba.ime}`}
                >
                    <FaViber size={24} />
                </button>
                <Telefon
                    telefon={osoba.telefon}
                    ariaLabel={`Pozovi ${osoba.ime}`}
                    className="w-full"
                />
                <button
                    className="kontakt-dugme kontakt-karta-dugme text-green-500 w-full"
                    onClick={() => window.open(`https://wa.me/${osoba.telefon}`, "_blank")}
                    aria-label={`WhatsApp sa ${osoba.ime}`}
                >
                    <FaWhatsapp size={24} />
                </button>
            </div>
        </article>
    );
}

export default KontaktKarta;
