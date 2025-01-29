import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
import MyButton from '../Button/MyButton';
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
          <MyButton text="RESERVATION" padding="10px 35px" />
        </div>
      </nav>
    </header>
  );
}
