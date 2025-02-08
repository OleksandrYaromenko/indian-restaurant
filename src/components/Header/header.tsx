import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';
import MyButton from '../Button/MyButton';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Header(): JSX.Element {
  const { t } = useTranslation();
  return (
    <header className={scss.container}>
      <div>
        <p className={scss.logo}>India cafe</p>
      </div>
      <nav className={scss.nav}>
        <NavLink className={scss.navLink} to="/">
          {t('HOME')}
        </NavLink>
        <NavLink className={scss.navLink} to="/menu">
          {t('MENU')}
        </NavLink>
        <NavLink className={scss.navLink} to="/delivery">
          {t('DELIVERY')}
        </NavLink>
        <div>
          <MyButton text={t('header_button')} padding="10px 35px" />
        </div>
        <select
          className={scss.selectBox}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option className="optionsMenu" value="en">
            English
          </option>
          <option className="optionsMenu" value="uk">
            Українська
          </option>
        </select>
      </nav>
    </header>
  );
}
