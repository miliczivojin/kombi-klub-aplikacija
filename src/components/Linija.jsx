const bojeLinijeMapa = {
    crvena: "via-crvena",
    plava: "via-plava",
    tamnocrvena: "via-tamnocrvena",
};

function Linija({ boja = "crvena" }) {
    const klasaVia = bojeLinijeMapa[boja] ?? bojeLinijeMapa.crvena;
    return (
        <hr className={`mx-auto mt-4 h-1 w-75 rounded-full bg-linear-to-r from-transparent ${klasaVia} to-transparent border-0 md:w-100 lg:w-150`} />
    );
}

export default Linija;