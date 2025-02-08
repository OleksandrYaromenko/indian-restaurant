import Title from '../Title/Title';
import scss from './about-us.module.scss';
import { useTranslation } from 'react-i18next';

export default function About(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={scss.container}>
      <Title text={t('title_about')} />
      <div className={scss.paragraf_container}>
        <p className={scss.paragraf}>{t('india_about')}</p>
        <p className={scss.paragraf}>{t('india_about2')}</p>
        <p className={scss.paragraf}>{t('india_about3')}</p>
      </div>
      <div className={scss.foto_cotainer}>
        <img className={scss.foto} src="/img/about/about1.jpg" alt="men" />
        <img className={scss.foto} src="/img/about/about2.jpg" alt="restoran" />
        <img className={scss.foto} src="/img/about/about3.jpg" alt="women" />
      </div>
    </div>
  );
}
