import { FaWhatsapp, FaViber } from "react-icons/fa";
import { BadgeCheck, FolderOpen } from "lucide-react";
import Telefon from "@/components/Telefon";

const osoba = {
    ime: "Zivojin Milic",
    telefon: "381600877647",
    slika: "https://i.imgur.com/yXOvdOSs.jpg",
};

const programIkonaKlasa = {
    crvena: "text-crvena",
    plava: "text-plava",
    tamnocrvena: "text-tamnocrvena",
};

const programOpis = {
    crvena: "Putnički i kombi program",
    plava: "Azijski putnički i kombi program",
    tamnocrvena: "Teretni i dostavni program",
};

function KontaktKarta({ boja = "crvena", ikona = "sparkle", className = "" }) {
    const ikonaKlasa = programIkonaKlasa[boja] ?? "text-neutral-600";
    const opis = programOpis[boja] ?? "Specijalizovani prodajni program";

    return (
        <article className={`kontakt-karta-id w-11/12 max-w-[18rem] mx-auto md:max-w-md md:mx-0 p-6 sm:p-7 flex flex-col gap-6 md:gap-5 relative ${className}`.trim()}>
                {/* Program / tip ikonica – gornji desni ugao */}
                <div className={`absolute top-4 right-4 ${ikonaKlasa}`} aria-hidden>
                    {ikona === "file" ? (
                        <FolderOpen className="w-5 h-5 min-[481px]:w-6 min-[481px]:h-6" strokeWidth={1.8} />
                    ) : (
                        <BadgeCheck className="w-5 h-5 min-[481px]:w-6 min-[481px]:h-6" strokeWidth={1.8} />
                    )}
                </div>

                {/* Do md: slika na vrhu, vertikalan raspored + veći gap; od md naviše: horizontalno */}
                <div className="flex flex-col items-center gap-4 max-md:gap-6 md:flex-row md:items-start md:gap-4">
                    <div className="kontakt-karta-id__portrait w-28 h-28 flex-shrink-0">
                        <img
                            src={osoba.slika}
                            alt={osoba.ime}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-1 min-h-0 text-center md:min-h-[8rem] md:text-left">
                        <h2 className="text-xl md:text-2xl font-semibold leading-tight text-neutral-900 tracking-tight">
                            {osoba.ime}
                        </h2>
                        <p className="text-sm md:text-base font-normal text-neutral-500">
                            {opis}
                        </p>
                    </div>
                </div>

                {/* Buttons – full-width bottom bar (3 equal columns) */}
                <div className="grid grid-cols-3 gap-3 mt-3 w-full">
                    <button
                        className="kontakt-dugme kontakt-karta-id__dugme-viber w-full h-11 sm:h-12 rounded-xl"
                        onClick={() => (window.location.href = `viber://chat?number=${osoba.telefon}`)}
                        aria-label={`Viber sa ${osoba.ime}`}
                    >
                        <FaViber size={22} />
                    </button>
                    <Telefon
                        telefon={osoba.telefon}
                        ariaLabel={`Pozovi ${osoba.ime}`}
                        className="kontakt-karta-id__dugme-tel w-full h-11 sm:h-12 rounded-xl"
                    />
                    <button
                        className="kontakt-dugme kontakt-karta-id__dugme-wa w-full h-11 sm:h-12 rounded-xl"
                        onClick={() => window.open(`https://wa.me/${osoba.telefon}`, "_blank")}
                        aria-label={`WhatsApp sa ${osoba.ime}`}
                    >
                        <FaWhatsapp size={22} />
                    </button>
                </div>
            </article>
    );
}

export default KontaktKarta;
