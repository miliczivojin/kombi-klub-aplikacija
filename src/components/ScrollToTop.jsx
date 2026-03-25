import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname: putanja } = useLocation();

    useEffect(() => {
        // Resetovanje pozicije na vrh stranice pri promeni rute.
        window.scrollTo(0, 0);
    }, [putanja]);

    return null;
}

export default ScrollToTop;
