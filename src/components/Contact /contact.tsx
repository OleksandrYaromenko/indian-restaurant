import Title from '../Title/Title.tsx';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdMail, IoMdTime } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import scss from './contact.module.scss';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
export default function Contact(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <Title text={t('contact_Title')} />
      </div>
      <div className={scss.container}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.792627679067!2d19.929816076571136!3d50.01524191860414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165cc722629fed%3A0xdba55cde34a4d10d!2sTutti%20Santi!5e0!3m2!1suk!2spl!4v1738163733529!5m2!1suk!2spl"
            width="600"
            height="450"
            style={{ border: '50' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={scss.info}>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {t('contact_Title')}{' '}
                  <MdContactPhone
                    style={{ color: '#f89345', marginLeft: '10px' }}
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <BsFillTelephoneInboundFill
                      style={{ color: '#f89345', marginRight: '10px' }}
                      size={23}
                    />
                    {t('contact_LinkPhone')}:
                    <a href={`tel:+48574773134`} className={scss.contact}>
                      {' '}
                      +48574773134
                    </a>
                  </p>
                  <p>
                    <IoMdMail
                      style={{ color: '#f89345', marginRight: '10px' }}
                      size={23}
                    />
                    {t('contact_LinkMail')}:
                    <a
                      href={`mailto:yaromenko.mail@gmail.com`}
                      className={scss.contact}
                    >
                      {' '}
                      yaromenko.mail@gmail.com
                    </a>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {' '}
                  {t('contact_Open')}{' '}
                  <IoMdTime style={{ color: '#f89345', marginLeft: '10px' }} />
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <p className={scss.color}>{t('open_MonThu')}</p>
                    </li>
                    <li>
                      <p>11:30 am - 08:00 pm</p>
                    </li>
                    <li>
                      <p className={scss.color}>{t('open_Friday')}</p>
                    </li>
                    <li>
                      <p>11:30 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className={scss.color}>{t('open_Saturday')}</p>
                    </li>
                    <li>
                      <p>11:30 am - 10:00 pm</p>
                    </li>
                    <li>
                      <p className={scss.color}>{t('open_Sunday')}</p>
                    </li>
                    <li>
                      <p>11:30 am - 9:00 pm</p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}