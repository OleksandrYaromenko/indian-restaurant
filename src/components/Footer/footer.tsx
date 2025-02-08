import { IoLogoInstagram, IoLogoYoutube, IoMdMail } from 'react-icons/io';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import scss from './footer.module.scss';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className={scss.container}>
      <div>
        <a href={'/'} className={scss.logo}>
          India Cafe
        </a>
        <p>{t('footer_text')}</p>
        <ul className={scss.flex}>
          <li>
            <a href="https://www.youtube.com/" className={scss.icon}>
              <IoLogoYoutube
                className={scss.icon}
                style={{ marginRight: '10px' }}
                size={30}
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebook
                className={scss.icon}
                style={{ marginRight: '10px' }}
                size={30}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <IoLogoInstagram
                className={scss.icon}
                style={{ marginRight: '10px' }}
                size={30}
              />
            </a>
          </li>
          <li>
            <a href="https://pl.pinterest.com">
              <FaPinterest
                className={scss.icon}
                style={{ marginRight: '10px' }}
                size={30}
              />
            </a>
          </li>
        </ul>
        <p>© 2024 {t('footer_text2')}</p>
      </div>
      <div>
        <p>
          <BsFillTelephoneInboundFill
            style={{ color: 'black', marginRight: '10px' }}
            size={23}
          />
          {t('contact_LinkPhone')}:
          <a href={`tel:+48574773134`} className={scss.contact}>
            {' '}
            +48574773134
          </a>
        </p>
        <p>
          <IoMdMail style={{ color: 'black', marginRight: '10px' }} size={23} />
          {t('contact_LinkMail')}:
          <a href={`mailto:yaromenko.mail@gmail.com`} className={scss.contact}>
            {' '}
            yaromenko.mail@gmail.com
          </a>
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="/" className={scss.icon}>
              {t('HOME')}
            </a>
          </li>
          <li>
            <a href="/Menu" className={scss.icon}>
              {t('MENU')}
            </a>
          </li>
          <li>
            <a href="/Delivery" className={scss.icon}>
              {t('DELIVERY')}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
