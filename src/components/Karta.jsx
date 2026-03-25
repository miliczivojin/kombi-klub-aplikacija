const MAPA =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.524371221578!2d21.88503197884562!3d43.31598328226148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0ad36a40001%3A0xb5886b4a61694b5d!2sKombi%20Klub!5e0!3m2!1ssr!2srs!4v1768361875115!5m2!1ssr!2srs";

const klasaOkvira =
  "h-100 md:h-120 rounded-none md:rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-white";

function Karta() {
  return (
    <div className={klasaOkvira}>
      <iframe
        src={MAPA}
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokacija Kombi Kluba"
      />
    </div>
  );
}

export default Karta;
