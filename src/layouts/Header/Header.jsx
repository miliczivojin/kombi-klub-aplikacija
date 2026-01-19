import Logo from './Logo';
import KlasikMeni from './KlasikMeni';
import BurgerMeni from './BurgerMeni';

function Header() {
  return (
    <header>
      <Logo />
      <KlasikMeni />
      <BurgerMeni />
    </header>
  );
}

export default Header;
