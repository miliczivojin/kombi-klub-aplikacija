import logo from "@/assets/photos/onama.svg";
import kombiKlubRadnja from "@/assets/photos/kombiklub.webp";
import nocaJapanac from "@/assets/photos/nocajapanac.webp";
import { MapPin, Star } from "lucide-react";
import Linija from "@/components/Linija";
import Dugme from "@/components/Dugme";

const MAPA =
    "https://www.google.com/maps/search/?api=1&query=Kombi+Klub+Obili%C4%87ev+venac+88+Ni%C5%A1";

const ocene = [
    {
        oznaka: "k1",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Dragana",
        tekst: "Нуди и могућност плаћања путем административних забрана.",
    },
    {
        oznaka: "k2",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Djuradj Milacic",
        tekst: "Одлична услуга и људи су веома поуздани",
    },
    {
        oznaka: "k3",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Janko",
        tekst: "Најбољи у својој области! Професионализам изнад свега",
    },
    {
        oznaka: "k4",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Огњен",
        tekst: "Новица је прави мајстор!!!",
    },
    {
        oznaka: "k5",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Milan Cirkovic",
        tekst: "Пријатно, корисно, професионално!",
    },
    {
        oznaka: "k6",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Nikola Pešić",
        tekst: "Одлична сарадња, увек се труде да изађу у сусрет потребама купаца",
    },
    {
        oznaka: "k7",
        ocena: 5,
        googleMaps: "Google Maps",
        ime: "Mateja Mitrović",
        tekst: "Најбоља услуга у Нишу, момци су заиста професионални",
    },
];

const klasaZvezde = "flex items-center gap-1";
const klasaZvezdaPopunjena = "fill-amber-400 text-amber-700";
const klasaZvezdaNepopunjena = "text-neutral-400";

function Zvezde({ vrednost }) {
    return (
        <div className={klasaZvezde} aria-label={`Ocena ${vrednost} od 5`}>
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < vrednost ? klasaZvezdaPopunjena : klasaZvezdaNepopunjena}`}
                    aria-hidden
                />
            ))}
        </div>
    );
}

function ONama() {
    return (
        <main>
            <section className="pb-16 overflow-hidden min-visina pozadina" aria-labelledby="about-hero-heading">
                <div className="mx-auto max-w-640 px-2 py-8 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-12 xl:gap-16">
                        <div className="flex justify-center relative">
                            <div className="absolute -inset-4 rounded-xl bg-linear-to-br from-white/25 to-transparent opacity-50 blur-sm" aria-hidden />
                            <div className="relative rounded-xl border border-white/40 bg-white/15 p-2 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.30)] ring-1 ring-white/25 backdrop-blur-sm hover:border-white/50">
                                <div className="p-4 rounded-2xl bg-linear-to-b from-white/25 to-white/10">
                                    <img
                                        src={logo}
                                        alt="Kombi Klub"
                                        width={256}
                                        height={256}
                                        className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-56 lg:w-56 object-contain select-none"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 xl:w-2/5">
                            <div className="mb-2 sm:mb-4 flex items-center gap-4">
                                <span className="h-px flex-1 max-w-16 bg-linear-to-r from-white to-white/0 opacity-90" aria-hidden />
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                                    Kombi Klub
                                </span>
                            </div>
                            <h1
                                id="about-hero-heading"
                                className="mb-4 lg:mb-6 text-left font-logo-kombi text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                            >
                                O nama
                            </h1>
                            <div className="px-4 py-2 md:px-6 md:py-4 rounded-xl border border-white/50 bg-neutral-900/50 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
                                <p className="text-left text-base text-white font-medium leading-relaxed">
                                    Kombi Klub se od <strong>2006.</strong> godine bavi prodajom autodelova, pružajući najbolju uslugu servisima i kupcima u regionu.
                                    Kao zvanično predstavništvo <strong>Febi bilstein</strong> grupe za jugoistočnu Srbiju,
                                    nudimo kompletan putnički, teretni i azijski program,
                                    koji je sada proširen i na savremena rešenja za kineska električna vozila.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-8 md:px-12 py-8 sm:py-12" aria-labelledby="locations-heading">
                <div className="mx-auto max-w-640">
                    <h2 id="locations-heading" className="text-center text-naslov tracking-wide font-bold text-neutral-800">
                        Naše prodavnice
                    </h2>

                    <div className="mb-8">
                        <Linija boja="crvena" />
                    </div>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <figure className="group flex flex-col">
                            <div className="relative overflow-hidden rounded-xl border border-neutral-300 aspect-[16/9]">
                                <img
                                    src={kombiKlubRadnja}
                                    alt="Kombi Klub — 20 godina sa vama"
                                    width={640}
                                    height={400}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                                <figcaption className="p-4 absolute bottom-0 left-0 right-0">
                                    <p className="font-logo-kombi text-xl sm:text-2xl text-white drop-shadow-md tracking-tight">
                                        KOMBI KLUB
                                    </p>
                                    <p className="mt-2 flex items-center gap-2 text-sm text-white font-medium">
                                        <MapPin className="h-4 w-4" aria-hidden />
                                        Obilićev Venac 88, Niš
                                    </p>
                                </figcaption>
                            </div>
                        </figure>

                        <figure className="group flex flex-col">
                            <div className="relative overflow-hidden rounded-xl border border-neutral-300 aspect-[16/9]">
                                <img
                                    src={nocaJapanac}
                                    alt="Noce Japanac — zvanični predstavnik Blue Print"
                                    width={640}
                                    height={400}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                                <figcaption className="p-4 absolute bottom-0 left-0 right-0">
                                    <p className="font-logo-japanac text-lg sm:text-xl text-white drop-shadow-md">
                                        Noca Japanac
                                    </p>
                                    <p className="mt-2 flex items-center gap-2 text-sm text-white font-medium">
                                        <MapPin className="h-4 w-4" aria-hidden />
                                        Obilićev Venac 93, Niš
                                    </p>
                                </figcaption>
                            </div>
                        </figure>
                    </div>

                    <div className="p-4 mt-4 rounded-xl border border-crvena/20 bg-crvena-soft text-center">
                        <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                            Objekti su <span className="text-crvena font-semibold">pozicionirani jedan naspram drugog</span>
                            <br />
                            <span className="font-semibold">Lako parkiranje</span>,
                            <span className="font-semibold"> brza komunikacija</span> između prodavnica i
                            <span className="text-crvena font-semibold"> kompletnu uslugu</span> na jednom mestu.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 md:py-24" aria-labelledby="ocene-heading">
                <div className="max-w-640 mx-auto">
                    <style>{`
                        @keyframes oceneHorizontalno {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }`}
                    </style>

                    <h2 id="ocene-heading" className="text-center text-2xl sm:text-3xl md:text-naslov font-bold text-neutral-800 tracking-tight">
                        Šta kažu naši kupci
                    </h2>

                    <div className="mb-12">
                        <Linija boja="crvena" />
                    </div>

                    <p className="text-center text-sm sm:text-base text-neutral-600">
                        Ocena Kombi Kluba na Google Maps:{" "}
                        <strong className="text-neutral-800">4.9</strong>.
                    </p>

                    <div className="group mt-8 md:mt-12 overflow-hidden">
                        <div className="flex w-max [animation:oceneHorizontalno_60s_linear_infinite] group-hover:[animation-play-state:paused]">
                            {[0, 1].map((duplikat) => (
                                <div key={duplikat} className="flex gap-2 md:gap-4 pr-2 md:pr-4" aria-hidden={duplikat === 1}>
                                    {ocene.map((r) => (
                                        <article key={`${r.oznaka}-${duplikat}`} className="p-4 kol w-80 md:w-120 rounded-xl border border-neutral-300 bg-white shadow-card">
                                            <div className="mb-4 flex justify-between items-start text-left">
                                                <p className="font-semibold text-neutral-900">{r.ime}</p>
                                                <Zvezde vrednost={r.ocena} />
                                            </div>
                                            <p className="flex-1 text-sm text-neutral-700 leading-relaxed">{r.tekst}</p>
                                            <p className="mt-6 text-xs text-neutral-500">{r.googleMaps}</p>
                                        </article>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12 text-center">
                        <Dugme onClick={() => window.open(MAPA, "_blank", "noopener,noreferrer")} className="bg-crvena bg-crvena hover:bg-crvena/90">
                            Pogledaj sve recenzije
                        </Dugme>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ONama;
