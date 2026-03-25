const osnovnaKlasa =
    "px-4 py-2 border-2 sm:text-lg lg:text-xl border-black rounded-4xl shadow-[2px_2px_0_0_black] text-white font-semibold select-none cursor-pointer transition";

function Dugme({ children, className = "", onClick }) {
    return (
        <button
            className={`${osnovnaKlasa} ${className}`.trim()}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Dugme;