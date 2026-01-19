import Karta from "@/components/Karta";
import Linija from "@/components/Linija";
import KontaktKarta from "@/components/KontaktKarta";

const prodavci = [
    { naslov: "Putnicki i kombi program", boja: "crvena", text: "text-crvena" },
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
                <h2 className="p-4 text-center text-3xl font-medium text-gray-700">Kontaktirajte prodavca za vaš program</h2>

                <Linija />

                <div className="mt-8 xs:px-4 py-8 wrap gap-12 sm:gap-16">
                    {prodavci.map(({ naslov, boja, text }) => (
                        <div key={boja} className="kol">
                            <h3 className={`mb-4 text-center text-xl font-semibold ${text}`}>
                                {naslov}
                            </h3>

                            <KontaktKarta boja={boja} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-24">
                <h2 className="p-4 text-center text-3xl font-medium md:whitespace-pre-line text-gray-700">
                    {"Za informacije u vezi sa fakturama i dugovanjima,\nkontaktirajte računovodstvo"}
                </h2>

                <Linija />

                <div className="mt-8 xs:px-4 py-8 wrap gap-12 sm:gap-16">
                    <div className="kol">
                        <h3 className="mb-4 text-center text-xl text-crvena font-semibold">
                            Računovodstvo
                        </h3>

                        <KontaktKarta boja="crvena" />
                    </div>

                    <dl className="kol justify-center gap-8 text-lg">
                        {podaciFirma.map(({ naslov, vrednost }) => (
                            <div key={naslov}>
                                <dt className="text-gray-700 font-medium">{naslov}</dt>
                                <dd className="font-semibold tracking-wider">{vrednost}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>
        </main>
    );
}

export default Kontakt;