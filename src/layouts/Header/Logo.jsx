import slika from "@/assets/photos/logo_beli.png";

function Logo() {
  return (
    <img
      loading="lazy"
      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
      src={slika}
      alt="Logo Kombi Klub"
      width={100}
      height={100}
    />
  );
}

export default Logo;

