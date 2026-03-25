import { Camera, ImagePlus } from "lucide-react";
import Dugme from "@/components/Dugme";
import saobracajnaImg from "@/assets/photos/saobracajna.webp";
import Linija from "@/components/Linija";

const klasaSekcije = "w-full scroll-mt-20";
const klasaOdeljak = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12";
const klasaNaslov = "w-full text-naslov text-center font-semibold text-neutral-900";
const klasaOkvirSlike =
    "flex w-4/5 md:w-1/2 justify-center";
const klasaSlika =
    "max-h-80 rounded-xl border border-neutral-400 object-contain shadow-card-hover transition-transform transition-shadow duration-200 hover:scale-[1.01] hover:border-neutral-500";
const klasaTekst = "kol w-full md:w-1/2 max-w-sm md:max-w-md items-stretch gap-4";
const klasaParagraf = "text-center md:text-left text-sm sm:text-base text-neutral-700";
const klasaOpcije = "mt-2 kol gap-4";
const klasaOpcijaKamera = "flex w-full items-center justify-center gap-2 bg-crvena hover:bg-crvena/90";
const klasaOpcijaGalerija =
    "flex w-full items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-100/90 !text-neutral-900";

const handleOpcijaKlik = () => {};

function SkenerSekcija() {
    return (
        <section id="skener-saobracajnu" className={klasaSekcije}>
            <div className={klasaOdeljak}>
                <h2 className={klasaNaslov}>
                    Skeniraj saobraćajnu
                </h2>
                <div className="mb-16 md:mb-24">
                    <Linija boja="crvena" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className={klasaOkvirSlike}>
                        <img
                            src={saobracajnaImg}
                            alt="Saobraćajna dozvola"
                            className={klasaSlika}
                            loading="lazy"
                        />
                    </div>

                    <div className={klasaTekst}>
                        <p className={klasaParagraf}>
                            Dodaj saobraćajnu kako bi izvukli ključne podatke u tekstualnom obliku.
                        </p>

                        <div className={klasaOpcije}>
                            <Dugme
                                className={klasaOpcijaKamera}
                                onClick={handleOpcijaKlik}
                            >

                                <Camera className="h-6 w-6" strokeWidth={1.8} />
                                <span>Skeniraj zadnju stranu</span>
                            </Dugme>

                            <Dugme
                                className={klasaOpcijaGalerija}
                                onClick={handleOpcijaKlik}
                            >

                                <ImagePlus className="h-6 w-6" strokeWidth={1.8} />
                                <span>Skeniraj sliku iz galerije</span>
                            </Dugme>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkenerSekcija;

