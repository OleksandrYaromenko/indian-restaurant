import { IoLogoInstagram, IoLogoYoutube, IoMdMail } from 'react-icons/io';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import scss from './footer.module.scss';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
export default function Footer(): JSX.Element {
  return (
    <section className={scss.container}>
      <div>
        <a href={'/'} className={scss.logo}>
          India Cafe
        </a>
        <p>Get in touch with us via social media.</p>
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
        <p>© 2024 India Cafe all rights reserved</p>
      </div>
      <div>
        <p>
          <BsFillTelephoneInboundFill
            style={{ color: 'black', marginRight: '10px' }}
            size={23}
          />
          Phone:
          <a href={`tel:+48574773134`} className={scss.contact}>
            {' '}
            +48574773134
          </a>
        </p>
        <p>
          <IoMdMail style={{ color: 'black', marginRight: '10px' }} size={23} />
          Email:
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
              HOME
            </a>
          </li>
          <li>
            <a href="/Menu" className={scss.icon}>
              MENU
            </a>
          </li>
          <li>
            <a href="/Delivery" className={scss.icon}>
              DELIVERY
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
