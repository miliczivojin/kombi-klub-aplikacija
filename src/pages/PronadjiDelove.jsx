import pozadina from "@/assets/photos/pozadina_delovi.png";
import saobracajna from "@/assets/photos/saobracajna.png";

import Dugme from "@/components/Dugme";
import Linija from "@/components/Linija";

function PronadjiDelove() {
    return (
        <main>
            <div className="relative px-4 kol justify-around items-center w-full min-visina bg-center bg-cover bg-no-repeat sekcija-senka" style={{ backgroundImage: `url(${pozadina})` }}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xs pointer-events-none"></div>
                <div className="relative z-10 text-center">
                    <h1 className="py-4 text-white text-naslov font-semibold whitespace-pre-line">
                        {`Skenirajte zadnju stranu saobraćajne dozvole\nili unesite podatke sa dozvole ručno`}
                    </h1>

                    <Linija />
                </div>

                <div className="relative z-10 wrap flex-col xs:flex-row gap-4 md:gap-8">
                    <Dugme className="bg-crvena hover:bg-red-600"
                        onClick={() => { }}>
                        Skeniraj saobraćajnu
                    </Dugme>
                    <Dugme className="bg-gray-700 hover:bg-gray-600"
                        onClick={() => { }}>
                        Unesi podatke ručno
                    </Dugme>
                </div>
            </div>
        </main >
    );
}

export default PronadjiDelove;