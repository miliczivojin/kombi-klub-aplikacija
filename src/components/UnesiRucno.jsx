import { useState } from "react";
import Linija from "@/components/Linija";

const inputKlasik =
    "w-full rounded-xl border border-neutral-400 bg-white px-4 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-400 transition-[border-color,box-shadow] outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/25 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.05)]";

const inputSasija =
    "w-full rounded-xl border-2 border-crvena/70 bg-crvena-soft/90 px-4 py-2 text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 transition-[border-color,box-shadow] outline-none focus:border-crvena focus:ring-2 focus:ring-crvena/25 focus:shadow-[0_0_0_4px_rgba(185,30,30,0.1)]";

function GreskaPolje({ poruka }) {
    return (!poruka) ? null : <p className="text-sm text-crvena">{poruka}</p>;
}

function UnesiRucno() {
    const [values, setValues] = useState({
        d1: "",
        d2: "",
        d3: "",
        e: "",
        p1: "",
        p2: "",
        p3: "",
    });

    const [touched, setTouched] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

    const requiredError = (key) => {
        return (values[key]?.trim() || (!submitted && !touched[key]))
            ? null
            : "Ovo polje je obavezno";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!values.d1.trim() || !values.d2.trim() || !values.e.trim()) return;
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
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8"
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
                            value={values.d1}
                            onChange={set("d1")}
                            onBlur={() => setTouched((t) => ({ ...t, d1: true }))}
                            placeholder="npr. Volkswagen"
                            aria-invalid={!!requiredError("d1")}
                            className={inputKlasik}
                        />
                        <GreskaPolje poruka={requiredError("d1")} />
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
                            value={values.d2}
                            onChange={set("d2")}
                            onBlur={() => setTouched((t) => ({ ...t, d2: true }))}
                            placeholder="npr. Golf"
                            aria-invalid={!!requiredError("d2")}
                            className={inputKlasik}
                        />
                        <GreskaPolje poruka={requiredError("d2")} />
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
                            value={values.d3}
                            onChange={set("d3")}
                            placeholder="npr. putničko vozilo"
                            className={inputKlasik}
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
                            value={values.e}
                            onChange={set("e")}
                            onBlur={() => setTouched((t) => ({ ...t, e: true }))}
                            placeholder="npr. WVWZZZ1JZXW000001"
                            aria-invalid={!!requiredError("e")}
                            className={inputSasija}
                        />
                        <p className="text-xs text-neutral-600">
                            Jedinstveni broj vozila (17 znakova; na dokumentu obično označen kao E).
                        </p>
                        <GreskaPolje poruka={requiredError("e")} />
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
                            value={values.p1}
                            onChange={set("p1")}
                            placeholder="npr. 1598 cm³"
                            className={inputKlasik}
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
                            value={values.p2}
                            onChange={set("p2")}
                            placeholder="npr. 81"
                            className={inputKlasik}
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
                            value={values.p3}
                            onChange={set("p3")}
                            placeholder="npr. dizel, benzin, hibrid"
                            className={inputKlasik}
                        />
                    </div>

                    <div className="mt-4 md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="w-full max-w-md px-4 py-2 border-2 sm:text-lg lg:text-xl border-black rounded-4xl shadow-[2px_2px_0_0_black] text-white font-semibold select-none cursor-pointer transition bg-crvena hover:bg-crvena/90"
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
