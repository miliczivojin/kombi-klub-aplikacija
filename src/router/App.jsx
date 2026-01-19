import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer";

import Pocetna from "@/pages/Pocetna";
import PronadjiDelove from "@/pages/PronadjiDelove";
import ONama from "@/pages/ONama";
import Kontakt from "@/pages/Kontakt";

import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/pronadji-delove" element={<PronadjiDelove />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
