import { FaPhone } from "react-icons/fa";

function Telefon({ telefon }) {
    return (
        <button className="kontakt-dugme bg-emerald-500 hover:bg-emerald-700"
            onClick={() => window.location.href = `tel:+${telefon}`} aria-label={`Pozovi ${telefon}`}>
            <FaPhone size={24} />
        </button>
    );
}

export default Telefon;