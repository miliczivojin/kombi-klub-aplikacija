import kombi from "@/assets/photos/kombi-pocetna.svg";
import godine from "@/assets/photos/20godina.webp";
import garancija from "@/assets/photos/garancija.png";
import blueprint from "@/assets/photos/blueprint.png";
import febi from "@/assets/photos/febi.png";
import swag from "@/assets/photos/swag.png";
import blueprintPlavi from "@/assets/photos/blueprint_plavi.png";

import Dugme from "@/components/Dugme";
import KontaktKarta from "@/components/KontaktKarta";

const skrolujDo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

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

const DeoKapitala = ({ vrednost, naslov }) => (
    <div className="kol">
        <span className="text-5xl font-bold text-crvena">{vrednost}</span>
        <span className="text-naslov font-medium text-black">{naslov}</span>
    </div>
);

const BrendSekcija = ({ naslov, naslovClass = "", opis, pozadina, slikaSrc, slikaAlt, width, height, slikaClass }) => (
    <section className={`p-8 my-24 lg:mx-12 lg:rounded-md bg-linear-to-b md:bg-linear-to-r ${pozadina} sekcija-senka`}>
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
    return (
        <main>
            <div className="pozadina">
                <section className="kol justify-around items-center gap-4 min-visina">
                    <div className="w-full flex justify-center items-center">
                        <div className="logo font-logo-kombi text-end drop-shadow-black drop-shadow-xl whitespace-pre-line">
                            {"KOMBI\nKLUB"}
                        </div>

                        <img src={kombi} alt="VW T2 Panel Van Kombi Klub" className="w-1/3" fetchPriority="high" width={260} height={150} />
                    </div>

                    <div className="wrap flex-col xs:flex-row gap-4 md:gap-8">
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
                </section>

                <section className="mt-16 text-shadow-lg">
                    <h1 className="mx-auto mb-24 text-naslov text-center font-semibold whitespace-pre-line">
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

            <div className="px-8 py-24 red justify-around gap-12 bg-gray-100">
                <DeoKapitala vrednost="12+" naslov="Zaposlenih" />
                <DeoKapitala vrednost="5" naslov="Automobila" />
                <DeoKapitala vrednost="100+" naslov="Brendova" />
            </div>

            <section id="laki-program" className="my-24 scroll-mt-20">
                <h2 className={`mb-8 w-full text-center text-naslov text-crvena font-semibold`}>
                    Putnički i kombi program
                </h2>

                <div className="xs:px-4 wrap gap-8 sm:gap-12">
                    <KontaktKarta boja="crvena" />
                    <KontaktKarta boja="crvena" />
                    <KontaktKarta boja="crvena" />
                </div>
            </section>

            <section id="azijski-program" className="my-24 scroll-mt-20">
                <h2 className={`mb-8 w-full text-center text-naslov text-plava font-semibold`}>
                    Azijski program
                </h2>

                <div className="xs:px-4 wrap gap-8 sm:gap-12">
                    <KontaktKarta boja="plava" />
                </div>
            </section>

            <section id="teretni-program" className="my-24 scroll-mt-20">
                <h2 className={`mb-8 w-full text-center text-naslov text-tamnocrvena font-semibold`}>
                    Teretni program
                </h2>

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
                <h2 className="py-4 mb-8 mx-auto w-fit text-naslov text-center font-bold bg-linear-to-r from-crvena to-plava bg-clip-text text-transparent whitespace-pre-line">
                    {"Zvanični predstavnici Bilstein grupe\nza jugoistočnu Srbiju"}
                </h2>

                <div className="red justify-center items-center sm:items-end gap-16">
                    <figure className="bilstein">
                        <Slika src={febi} alt="Febi Bilstein logo" width={320} height={248} />

                        <figcaption className="opis-logo">
                            Febi Bilstein
                        </figcaption>
                    </figure>

                    <figure className="bilstein">
                        <Slika src={swag} alt="Swag logo" width={320} height={126} />

                        <figcaption className="opis-logo">
                            SWAG
                        </figcaption>
                    </figure>

                    <figure className="bilstein">
                        <Slika src={blueprintPlavi} alt="Blue Print logo" width={320} height={320} />

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
