import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
export default function Header(): JSX.Element {
  return (
    <header className={scss.container}>
      <div>
        <p className={scss.logo}>India cafe</p>
      </div>
      <nav className={scss.nav}>
        <NavLink className={scss.navLink} to="/">
          HOME
        </NavLink>
        <NavLink className={scss.navLink} to="/menu">
          MENU
        </NavLink>
        <NavLink className={scss.navLink} to="/delivery">
          DELIVERY
        </NavLink>
        <div>
          <button className={scss.button}>RESERVATION</button>
        </div>
      </nav>
    </header>
  );
}
