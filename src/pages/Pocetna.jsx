import { useRef, useState, useEffect } from "react";
import kombi from "@/assets/photos/kombi-pocetna.svg";
import godine from "@/assets/photos/20godina.webp";
import garancija from "@/assets/photos/garancija.png";
import blueprint from "@/assets/photos/blueprint.png";
import febi from "@/assets/photos/febi.png";
import swag from "@/assets/photos/swag.png";
import blueprintPlavi from "@/assets/photos/blueprint_plavi.png";
import { Users, Calendar, Award, ShieldCheck } from "lucide-react";

import Dugme from "@/components/Dugme";
import KontaktKarta from "@/components/KontaktKarta";
import Linija from "@/components/Linija";

const skrolujDo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

const STATS = [
    {
        id: "employees",
        value: 12,
        suffix: "+",
        label: "Posvećenih zaposlenih",
        icon: <Users className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
        id: "experience",
        value: 20,
        suffix: "+",
        label: "Godina iskustva",
        icon: <Calendar className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
        id: "brands",
        value: 100,
        suffix: "+",
        label: "Premium brendova",
        icon: <Award className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
        id: "rating",
        value: null,
        suffix: "",
        label: "Bonitetna ocena",
        displayValue: "A+",
        icon: <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9" />,
    },
];

function useCountUp(isActive, target, durationMs = 1500) {
    const [display, setDisplay] = useState(0);
    const startRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!isActive || target == null) return;
        startRef.current = null;
        const tick = (timestamp) => {
            if (startRef.current == null) startRef.current = timestamp;
            const progress = Math.min((timestamp - startRef.current) / durationMs, 1);
            setDisplay(Math.round(easeOutCubic(progress) * target));
            if (progress < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current != null) cancelAnimationFrame(rafRef.current); };
    }, [isActive, target, durationMs]);

    return display;
}

function useStatsInView() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setInView(true); },
            { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return [ref, inView];
}

const Slika = ({ src, alt, width, height, className = "" }) => (
    <img
        loading="lazy"
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
    />
);

const BrendSekcija = ({ naslov, naslovClass = "", opis, pozadina, slikaSrc, slikaAlt, width, height, slikaClass }) => (
    <section className={`p-8 my-24 lg:mx-12 lg:rounded-xl bg-linear-to-b md:bg-linear-to-r ${pozadina} sekcija-senka`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="w-full md:w-2/3 xl:w-1/2 2xl:w-2/5 kol gap-4 text-white">
                <h2 className={`text-naslov font-bold leading-none ${naslovClass}`}>
                    {naslov}
                </h2>

                <p className="mt-8 text-left text-lg font-medium">
                    {opis}
                </p>
            </div>

            <Slika
                src={slikaSrc}
                alt={slikaAlt}
                width={width}
                height={height}
                className={slikaClass}
            />
        </div>
    </section>
);

function Pocetna() {
    const [statsRef, statsInView] = useStatsInView();
    const count12 = useCountUp(statsInView, 12);
    const count20 = useCountUp(statsInView, 20);
    const count100 = useCountUp(statsInView, 100);

    return (
        <main>
            <div className="pozadina">
                <section className="flex flex-col md:flex-row overflow-x-hidden">
                    <div className="w-full md:w-2/3 min-visina kol justify-around items-center">
                        <div className="text-center">
                            <div className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-white tracking-tight drop-shadow-black drop-shadow-md font-logo-kombi">
                                KOMBI KLUB
                            </div>

                            <p className="px-5 py-2.5 mx-2.5 mt-4 inline-flex justify-center items-center rounded-xl bg-white/10 border border-white/20 tracking-wide leading-tight font-semibold text-white backdrop-blur-sm shadow-[0_8px_28px_rgba(0,0,0,0.15)] drop-shadow-black drop-shadow-sm select-none pointer-events-none">
                                <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                                    Vaš najpouzdaniji partner na putu
                                </span>
                            </p>
                        </div>

                        <div className="mt-4 wrap flex-col xs:flex-row gap-4 md:gap-6">
                            <Dugme className="bg-crvena hover:bg-crvena/80"
                                onClick={() => skrolujDo("laki-program")}>
                                Putnički i kombi program
                            </Dugme>
                            <Dugme className="bg-plava hover:bg-plava/80"
                                onClick={() => skrolujDo("azijski-program")}>
                                Azijski program
                            </Dugme>
                            <Dugme className="bg-tamnocrvena hover:bg-tamnocrvena/80"
                                onClick={() => skrolujDo("teretni-program")}>
                                Teretni program
                            </Dugme>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0 w-2/3 md:w-1/3 self-end md:self-center">
                        <img src={kombi} alt="Kombi VW T2, Kombi Klub" className="w-full right-0 translate-x-1/4 select-none pointer-events-none" draggable="false" fetchPriority="high" width={260} height={150} />
                    </div>
                </section>

                <section className="mt-8 text-shadow-lg">
                    <h1 className="mx-auto mb-24 text-naslov text-center font-semibold whitespace-pre-line text-neutral-800">
                        {"Prodavnica autodelova\nza sva putnička i teretna vozila"}
                    </h1>

                    <div className="p-8 relative z-10 red justify-center items-center gap-4 sm:gap-8 bg-crvena sekcija-senka">
                        <div className="text-naslov text-white font-logo-kombi">KOMBI KLUB</div>

                        <Slika
                            src={godine}
                            alt="20 godina sa vama"
                            width={145}
                            height={96}
                            className="w-1/3 sm:w-1/6"
                        />

                        <div className="kol text-naslov text-white text-center sm:text-left font-bold whitespace-pre-line">
                            {"GODINA\nSA VAMA"}
                        </div>
                    </div>
                </section>
            </div>

            <section
                ref={statsRef}
                className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
                aria-labelledby="company-stats-heading"
            >
                <h2 id="company-stats-heading" className="sr-only">
                    Statistika kompanije
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-640 mx-auto">
                    <div className="stat-card">
                        <div className="stat-card__icon" aria-hidden>
                            {STATS[0].icon}
                        </div>
                        <span className="stat-card__value">{count12}{STATS[0].suffix}</span>
                        <span className="stat-card__label">{STATS[0].label}</span>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon" aria-hidden>
                            {STATS[1].icon}
                        </div>
                        <span className="stat-card__value">{count20}{STATS[1].suffix}</span>
                        <span className="stat-card__label">{STATS[1].label}</span>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon" aria-hidden>
                            {STATS[2].icon}
                        </div>
                        <span className="stat-card__value">{count100}{STATS[2].suffix}</span>
                        <span className="stat-card__label">{STATS[2].label}</span>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__icon" aria-hidden>
                            {STATS[3].icon}
                        </div>
                        <span
                            className="stat-card__value transition-opacity duration-500"
                            style={{ opacity: statsInView ? 1 : 0 }}
                        >
                            {STATS[3].displayValue}
                        </span>
                        <span className="stat-card__label">{STATS[3].label}</span>
                    </div>
                </div>
            </section>

            <section id="laki-program" className="my-24 scroll-mt-20">
                <div className="w-full flex flex-col items-center">
                    <h2 className={`w-full text-center text-naslov text-crvena font-semibold`}>
                        Putnički i kombi program
                    </h2>
                    <div className="mb-10 w-full flex justify-center"><Linija boja="crvena" /></div>
                </div>
                <div className="xs:px-4 wrap gap-8 sm:gap-12">
                    <KontaktKarta boja="crvena" />
                    <KontaktKarta boja="crvena" />
                    <KontaktKarta boja="crvena" />
                </div>
            </section>

            <section id="azijski-program" className="my-24 scroll-mt-20">
                <div className="w-full flex flex-col items-center">
                    <h2 className={`w-full text-center text-naslov text-plava font-semibold`}>
                        Azijski program
                    </h2>
                    <div className="mb-10 w-full flex justify-center"><Linija boja="plava" /></div>
                </div>
                <div className="xs:px-4 wrap gap-8 sm:gap-12">
                    <KontaktKarta boja="plava" />
                </div>
            </section>

            <section id="teretni-program" className="my-24 scroll-mt-20">
                <div className="w-full flex flex-col items-center">
                    <h2 className={`w-full text-center text-naslov text-tamnocrvena font-semibold`}>
                        Teretni program
                    </h2>
                    <div className="mb-10 w-full flex justify-center"><Linija boja="tamnocrvena" /></div>
                </div>
                <div className="xs:px-4 wrap gap-8 sm:gap-12">
                    <KontaktKarta boja="tamnocrvena" />
                    <KontaktKarta boja="tamnocrvena" />
                </div>
            </section>

            <BrendSekcija
                naslov="3 godine bez brige"
                opis={
                    <>
                        Na sve proizvode <strong>Bilstein Group</strong> brendova
                        <strong> Febi, Blue Print i SWAG</strong> ostvarujete 3 godine
                        proizvođačke garancije, čime Bilstein Group potvrđuje svoj
                        ugled kao lider po kvalitetu na nezavisnom tržištu rezervnih delova.
                    </>
                }
                pozadina="from-tamnocrvena to-crvena"
                slikaSrc={garancija}
                slikaAlt="3 godine proizvođačke garancije"
                width={160}
                height={229}
                slikaClass="w-24 md:w-32 xl:w-40"
            />

            <section className="my-24">
                <h2 className="py-4 mb-8 mx-auto w-fit text-naslov text-center font-bold tracking-tight bg-linear-to-r from-crvena to-plava bg-clip-text text-transparent whitespace-pre-line">
                    {"Zvanični predstavnici Bilstein grupe\nza jugoistočnu Srbiju"}
                </h2>

                <div className="red justify-center items-center sm:items-end gap-16">
                    <figure className="bilstein">
                        <Slika src={febi} alt="Logo Febi Bilstein" width={320} height={248} />

                        <figcaption className="opis-logo">
                            Febi Bilstein
                        </figcaption>
                    </figure>

                    <figure className="bilstein">
                        <Slika src={swag} alt="Logo SWAG" width={320} height={126} />

                        <figcaption className="opis-logo">
                            SWAG
                        </figcaption>
                    </figure>

                    <figure className="bilstein">
                        <Slika src={blueprintPlavi} alt="Logo Blue Print" width={320} height={320} />

                        <figcaption className="opis-logo">
                            Blue Print
                        </figcaption>
                    </figure>
                </div>
            </section>

            <BrendSekcija
                naslov="Noca Japanac"
                naslovClass="font-logo-japanac"
                opis={
                    <>
                        Specijalizovana prodavnica autodelova u okviru Kombi Kluba, namenjena
                        putničkim i kombi vozilima azijskog porekla. U ponudi imamo širok
                        asortiman delova za japanska, korejska i <strong>KINESKA</strong> vozila.
                        Zvanični smo predstavnici brenda <strong>Blue Print</strong> za
                        jugoistočnu Srbiju.
                    </>
                }
                pozadina="from-tamnoplava to-plava"
                slikaSrc={blueprint}
                slikaAlt="Blue Print"
                width={192}
                height={169}
                slikaClass="w-32 md:w-40 xl:w-48"
            />
        </main>
    );
}

export default Pocetna;
