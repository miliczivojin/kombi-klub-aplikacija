import pozadina from "@/assets/photos/pozadina_delovi.webp";
import SkenerSekcija from "@/components/SkenerSekcija";
import UnesiRucno from "@/components/UnesiRucno";

import Dugme from "@/components/Dugme";
import Linija from "@/components/Linija";

function PronadjiDelove() {
    return (
        <main>
            <div className="relative kol justify-around items-center w-full min-visina overflow-hidden sekcija-senka">
                <img
                    src={pozadina}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm pointer-events-none"></div>
                <div className="relative z-10 text-center">
                    <h1 className="pt-4 text-white text-naslov font-semibold whitespace-pre-line">
                        {`Skeniraj saobraćajnu\nili unesi podatke ručno`}
                    </h1>

                    <Linija />
                </div>

                <div className="px-4 relative z-10 wrap flex-col xs:flex-row gap-4 md:gap-8">
                    <Dugme className="bg-crvena hover:bg-crvena/90"
                        onClick={() => { }}>
                        Skeniraj saobraćajnu
                    </Dugme>
                    <Dugme className="bg-neutral-700 hover:bg-neutral-600"
                        onClick={() => { }}>
                        Unesi podatke ručno
                    </Dugme>
                </div>
            </div>

            <SkenerSekcija />
            <UnesiRucno />
        </main >
    );
}

export default PronadjiDelove;