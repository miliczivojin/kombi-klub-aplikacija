import Karta from "@/components/Karta";
import Linija from "@/components/Linija";
import KontaktKarta from "@/components/KontaktKarta";

const radnici = [
    { naslov: "Putnički i kombi program", boja: "crvena", text: "text-crvena" },
    { naslov: "Azijski program", boja: "plava", text: "text-plava" },
    { naslov: "Teretni program", boja: "tamnocrvena", text: "text-tamnocrvena" },
];

const podaciFirma = [
    { naslov: "Broj računa", vrednost: "160-251900-06" },
    { naslov: "PIB", vrednost: "104263733" },
    { naslov: "MB", vrednost: "60017298" },
    { naslov: "Vlasnik i zastupnik", vrednost: "Novica Milić" },
];

function Kontakt() {
    return (
        <main>
            <section className="md:px-10 lg:px-20 pozadina">
                <h1 className="py-8 text-white text-naslov text-center md:text-left">Kontaktirajte Kombi Klub</h1>
                <Karta />
            </section>

            <section className="my-28">
                <h2 className="text-center text-3xl font-medium text-neutral-700 tracking-tight">Kontaktirajte prodavca</h2>

                <Linija />

                <div className="mt-8 xs:px-4 py-8 wrap gap-8 sm:gap-12">
                    {radnici.map(({ naslov, boja, text }) => (
                        <div key={boja} className="kol w-11/12 max-w-[20rem] md:max-w-md">
                            <h3 className={`mb-4 text-center text-xl font-semibold ${text}`}>
                                {naslov}
                            </h3>

                            <KontaktKarta boja={boja} className="w-full" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-28">
                <h2 className="text-center text-3xl font-medium text-neutral-700 tracking-tight">Kontaktirajte računovodstvo</h2>

                <Linija />

                <div className="mt-8 xs:px-4 py-8 wrap gap-8 sm:gap-12">
                    <div className="kol w-full max-w-md justify-center items-center">
                        <KontaktKarta boja="crvena" ikona="file" className="w-full" />
                    </div>

                    <div className="kol w-full max-w-md justify-center">
                        <article className="kontakt-karta-id w-full h-full p-6 kol gap-4 rounded-none xs:rounded-xl">
                            <div className="kol text-left gap-2">
                                <h4 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900">
                                    Podaci o firmi
                                </h4>
                                <p className="text-sm text-neutral-500">
                                    Osnovni podaci i račun Kombi Kluba.
                                </p>
                            </div>

                            <dl className="mt-4 grid grid-cols-1 gap-4 text-base text-neutral-800">
                                {podaciFirma.map(({ naslov, vrednost }) => (
                                    <div
                                        key={naslov}
                                        className="flex flex-col xs:flex-row items-start xs:items-baseline xs:justify-between"
                                    >
                                        <dt className="text-neutral-600 font-medium">
                                            {naslov}
                                        </dt>
                                        <dd className="font-semibold tracking-wide text-left xs:text-right">
                                            {vrednost}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Kontakt;