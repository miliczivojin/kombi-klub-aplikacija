import slika from "@/assets/photos/logo_beli.png";

function Logo() {
  return (
    <img
      loading="lazy"
      className="w-20 h-20"
      src={slika}
      alt="Header logo"
      width={100}
      height={100}
    />
  );
}

export default Logo;

