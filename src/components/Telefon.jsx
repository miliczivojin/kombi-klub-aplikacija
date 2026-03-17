import { FaPhone } from "react-icons/fa";

function Telefon({ telefon, className = "", ariaLabel }) {
    return (
        <button
            className={`kontakt-dugme bg-emerald-500 hover:bg-emerald-700 ${className}`.trim()}
            onClick={() => (window.location.href = `tel:+${telefon}`)}
            aria-label={ariaLabel ?? `Pozovi ${telefon}`}
        >
            <FaPhone size={24} />
        </button>
    );
}

export default Telefon;