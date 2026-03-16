const mapa =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1205.524371221578!2d21.88503197884562!3d43.31598328226148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0ad36a40001%3A0xb5886b4a61694b5d!2sKombi%20Klub!5e0!3m2!1ssr!2srs!4v1768361875115!5m2!1ssr!2srs";

function Karta() {
  return (
    <div className="h-100 md:h-120 md:rounded-xl md:overflow-hidden border border-neutral-200 shadow-card bg-neutral-100">
      <iframe
        src={mapa}
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokacija Kombi Kluba"
      />
    </div>
  );
}

export default Karta;
