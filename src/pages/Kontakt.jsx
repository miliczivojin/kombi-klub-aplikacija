import Karta from "@/components/Karta";
import Linija from "@/components/Linija";
import KontaktKarta from "@/components/KontaktKarta";

const prodavci = [
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

            <section className="my-24">
                <h2 className="p-4 text-center text-3xl font-medium text-neutral-700 tracking-tight">Kontaktirajte prodavca za vaš program</h2>

                <Linija />

                <div className="mt-8 xs:px-4 py-8 wrap gap-8 sm:gap-12">
                    {prodavci.map(({ naslov, boja, text }) => (
                        <div key={boja} className="kol w-full max-w-[18rem] md:max-w-md mx-auto">
                            <h3 className={`mb-4 text-center text-xl font-semibold ${text}`}>
                                {naslov}
                            </h3>

                            <KontaktKarta boja={boja} className="w-full max-w-none mx-0" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-24">
                <h2 className="p-4 text-center text-3xl font-medium md:whitespace-pre-line text-neutral-700 tracking-tight">
                    {"Za informacije u vezi sa fakturama i dugovanjima,\nkontaktirajte računovodstvo"}
                </h2>

                <Linija />

                <div className="mt-10 xs:px-4 py-8 flex flex-col md:flex-row justify-center items-stretch gap-8">
                    <div className="kol w-full max-w-md mx-auto md:mx-0 justify-center">
                        <KontaktKarta boja="crvena" ikona="file" className="w-full max-w-none mx-0" />
                    </div>

                    <div className="kol w-full max-w-md mx-auto md:mx-0 justify-center">
                        <article className="kontakt-karta-id w-full p-6 sm:p-7 flex flex-col gap-5 h-full">
                            <div className="flex flex-col gap-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold leading-tight text-neutral-900 tracking-tight">
                                    Podaci za plaćanje
                                </h4>
                                <p className="text-sm text-neutral-500">
                                    Informacije o firmi i računu Kombi Kluba.
                                </p>
                            </div>

                            <dl className="mt-2 grid grid-cols-1 gap-4 text-base text-neutral-800">
                                {podaciFirma.map(({ naslov, vrednost }) => (
                                    <div key={naslov} className="flex flex-row items-baseline justify-between gap-6">
                                        <dt className="text-neutral-600 font-medium whitespace-nowrap">{naslov}</dt>
                                        <dd className="font-semibold tracking-wide text-right">{vrednost}</dd>
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