import { Camera, ImagePlus } from "lucide-react";
import Dugme from "@/components/Dugme";
import saobracajnaImg from "@/assets/photos/saobracajna.png";
import Linija from "@/components/Linija";

function SkenerSekcija() {
    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
                <h2 className=" w-full text-naslov text-center font-semibold text-neutral-900">
                    Skeniraj saobraćajnu
                </h2>
                <div className="mb-16 md:mb-24 w-full flex justify-center">
                    <Linija boja="crvena" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex w-4/5 md:w-1/2 justify-center">
                        <img
                            src={saobracajnaImg}
                            alt="Saobraćajna dozvola"
                            className="max-h-80 rounded-xl border border-neutral-400 object-contain shadow-card-hover transition-transform transition-shadow duration-200 hover:scale-[1.01] hover:border-neutral-500"
                            loading="lazy"
                        />
                    </div>

                    <div className="kol w-full md:w-1/2 max-w-sm md:max-w-md items-stretch gap-4">
                        <p className="text-center md:text-left text-sm sm:text-base text-neutral-700">
                            Dodaj saobraćajnu kako bi izvukli ključne podatke u tekstualnom obliku.
                        </p>

                        <div className="mt-2 kol gap-4">
                            <Dugme
                                className="flex w-full items-center justify-center gap-2 bg-crvena hover:bg-crvena/90"
                                onClick={() => { }}
                            >

                                <Camera className="h-6 w-6" strokeWidth={1.8} />
                                <span>Skeniraj zadnju stranu</span>
                            </Dugme>

                            <Dugme
                                className="flex w-full items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-100/90 !text-neutral-900"
                                onClick={() => { }}
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

