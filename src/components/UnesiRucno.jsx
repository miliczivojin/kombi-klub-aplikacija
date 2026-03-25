import { useState } from "react";
import Linija from "@/components/Linija";

const unosKlasik =
    "w-full rounded-xl border border-neutral-400 bg-white px-4 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 transition-[border-color,box-shadow] outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/25 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.05)]";

const unosSasija =
    "w-full rounded-xl border-2 border-crvena/70 bg-crvena-soft/90 px-4 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 transition-[border-color,box-shadow] outline-none focus:border-crvena focus:ring-2 focus:ring-crvena/25 focus:shadow-[0_0_0_4px_rgba(185,30,30,0.1)]";

const klasaForma =
    "mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8";

const klasaDugmetaNastavi =
    "w-full max-w-md px-4 py-2 border-2 sm:text-lg lg:text-xl border-black rounded-4xl shadow-[2px_2px_0_0_black] text-white font-semibold select-none cursor-pointer transition bg-crvena hover:bg-crvena/90";

function GreskaPolje({ poruka }) {
    return (!poruka) ? null : <p className="text-sm text-crvena">{poruka}</p>;
}

function UnesiRucno() {
    const [vrednosti, setVrednosti] = useState({
        d1: "",
        d2: "",
        d3: "",
        e: "",
        p1: "",
        p2: "",
        p3: "",
    });

    const [dodirnuto, setDodirnuto] = useState({});
    const [poslato, setPoslato] = useState(false);

    const postavi = (key) => (e) => setVrednosti((v) => ({ ...v, [key]: e.target.value }));

    const obaveznaGreska = (key) => {
        return (vrednosti[key]?.trim() || (!poslato && !dodirnuto[key]))
            ? null
            : "Ovo polje je obavezno";
    };

    const obradiSlanje = (e) => {
        e.preventDefault();
        setPoslato(true);
        if (!vrednosti.d1.trim() || !vrednosti.d2.trim() || !vrednosti.e.trim()) return;
    };

    return (
        <section id="unesi-rucno" className="mt-16 lg:mt-24 w-full border-t border-neutral-300/80 scroll-mt-20">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 pb-20 lg:pb-28">
                <h2 className="w-full text-naslov text-center font-semibold text-neutral-900">
                    Unesi podatke ručno
                </h2>
                <div className="mb-16 md:mb-24">
                    <Linija boja="crvena" />
                </div>

                <form
                    onSubmit={obradiSlanje}
                    className={klasaForma}
                    noValidate
                >
                    <div className="kol gap-1">
                        <label htmlFor="vd-d1" className="text-sm font-medium text-neutral-800">
                            Marka vozila (D1)
                        </label>
                        <input
                            id="vd-d1"
                            name="d1"
                            type="text"
                            autoComplete="off"
                            value={vrednosti.d1}
                            onChange={postavi("d1")}
                            onBlur={() => setDodirnuto((t) => ({ ...t, d1: true }))}
                            placeholder="npr. Volkswagen"
                            aria-invalid={!!obaveznaGreska("d1")}
                            className={unosKlasik}
                        />
                        <GreskaPolje poruka={obaveznaGreska("d1")} />
                    </div>

                    <div className="kol gap-1">
                        <label htmlFor="vd-d2" className="text-sm font-medium text-neutral-800">
                            Model (D2)
                        </label>
                        <input
                            id="vd-d2"
                            name="d2"
                            type="text"
                            autoComplete="off"
                            value={vrednosti.d2}
                            onChange={postavi("d2")}
                            onBlur={() => setDodirnuto((t) => ({ ...t, d2: true }))}
                            placeholder="npr. Golf"
                            aria-invalid={!!obaveznaGreska("d2")}
                            className={unosKlasik}
                        />
                        <GreskaPolje poruka={obaveznaGreska("d2")} />
                    </div>

                    <div className="kol gap-1 md:col-span-2">
                        <label htmlFor="vd-d3" className="text-sm font-medium text-neutral-800">
                            Komercijalni opis (D3)
                        </label>
                        <input
                            id="vd-d3"
                            name="d3"
                            type="text"
                            autoComplete="off"
                            value={vrednosti.d3}
                            onChange={postavi("d3")}
                            placeholder="npr. putničko vozilo"
                            className={unosKlasik}
                        />
                    </div>

                    <div className="kol gap-1 md:col-span-2">
                        <label htmlFor="vd-e" className="text-sm font-semibold text-neutral-900">
                            VIN / šasija (E)
                        </label>
                        <input
                            id="vd-e"
                            name="e"
                            type="text"
                            autoComplete="off"
                            inputMode="text"
                            maxLength={17}
                            value={vrednosti.e}
                            onChange={postavi("e")}
                            onBlur={() => setDodirnuto((t) => ({ ...t, e: true }))}
                            placeholder="npr. WVWZZZ1JZXW000001"
                            aria-invalid={!!obaveznaGreska("e")}
                            className={unosSasija}
                        />
                        <p className="text-xs text-neutral-600">
                            Jedinstveni broj vozila (17 znakova; na dokumentu obično označen kao E).
                        </p>
                        <GreskaPolje poruka={obaveznaGreska("e")} />
                    </div>

                    <div className="kol gap-1">
                        <label htmlFor="vd-p1" className="text-sm font-medium text-neutral-800">
                            Zapremina motora (P1)
                        </label>
                        <input
                            id="vd-p1"
                            name="p1"
                            type="text"
                            autoComplete="off"
                            value={vrednosti.p1}
                            onChange={postavi("p1")}
                            placeholder="npr. 1598 cm³"
                            className={unosKlasik}
                        />
                    </div>

                    <div className="kol gap-1">
                        <label htmlFor="vd-p2" className="text-sm font-medium text-neutral-800">
                            Snaga motora u kW (P2)
                        </label>
                        <input
                            id="vd-p2"
                            name="p2"
                            type="number"
                            min={0}
                            step="0.1"
                            inputMode="decimal"
                            value={vrednosti.p2}
                            onChange={postavi("p2")}
                            placeholder="npr. 81"
                            className={unosKlasik}
                        />
                    </div>

                    <div className="kol gap-1 md:col-span-2">
                        <label htmlFor="vd-p3" className="text-sm font-medium text-neutral-800">
                            Vrsta goriva (P3)
                        </label>
                        <input
                            id="vd-p3"
                            name="p3"
                            type="text"
                            autoComplete="off"
                            value={vrednosti.p3}
                            onChange={postavi("p3")}
                            placeholder="npr. dizel, benzin, hibrid"
                            className={unosKlasik}
                        />
                    </div>

                    <div className="mt-4 md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className={klasaDugmetaNastavi}
                        >
                            Nastavi
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default UnesiRucno;
