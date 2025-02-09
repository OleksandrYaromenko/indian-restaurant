import MyButton from '../Button/MyButton';
import scss from './Welcome.module.scss';
import { useTranslation } from 'react-i18next';

export default function Welcome(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={scss.welcome}>
      <div className={scss.container}>
        <p className={scss.paragraf}>{t('Welcome to India Cafe')} </p>
        <h1 className={scss.title}>{t('title_welcome')}</h1>
        <h2 className={scss.title}>{t('title_welcome2')}</h2>
        <MyButton text={t('button_welcome')} padding="16px 100px" />
      </div>
    </div>
  );
}
