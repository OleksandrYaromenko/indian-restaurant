import scss from './MenuPopular.module.scss';
import Title from '../Title/Title.tsx';
import MyButton from '../Button/MyButton.tsx';
import { useTranslation } from 'react-i18next';
export default function MenuPopular(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={scss.container}>
      <Title text={t('popular_Menu')} />
    <section className={scss.container}>
      <Title text={'POPULAR MENU'} />
      <div className={scss.menu}>
        <div className={scss.container_box}>
          <div className={scss.hidden__box}>
            <div className={scss.hidden__text}>
              <span className={scss.hidden__paragraph}>
                <MyButton text={t('popular_Button')} padding="20px 80px" />
              </span>
            </div>
            <img
              src="/public/img/menu/Ellipse%201.jpg"
              alt={'Ellipse'}
              className={scss.menu_img}
            />
            <div className={scss.flex}>
              <h4 className={scss.menu_img_title}>Chicken Tikka Masala</h4>
              <p className={scss.menu_img_paragraf}>{t('popular_Chicken')}</p>
            </div>
          </div>
        </div>
        <div className={scss.container_box}>
          <div className={scss.hidden__box}>
            <div className={scss.hidden__text}>
              <span className={scss.hidden__paragraph}>
                <MyButton text={t('popular_Button')} padding="20px 80px" />
              </span>
            </div>
            <img
              src="/public/img/menu/Ellipse%202.jpg"
              alt={'Ellipse'}
              className={scss.menu_img}
            />
            <div className={scss.flex}>
              <h4 className={scss.menu_img_title}>Biryani</h4>
              <p className={scss.menu_img_paragraf}>{t('popular_Biryani')}</p>
            </div>
          </div>
        </div>
        <div className={scss.container_box}>
          <div className={scss.hidden__box}>
            <div className={scss.hidden__text}>
              <span className={scss.hidden__paragraph}>
                <MyButton text={t('popular_Button')} padding="20px 80px" />
              </span>
            </div>
            <img
              src="/public/img/menu/Ellipse%203.jpg"
              alt={'Ellipse'}
              className={scss.menu_img}
            />
            <div className={scss.flex}>
              <h4 className={scss.menu_img_title}>Dosa</h4>
              <p className={scss.menu_img_paragraf}>{t('popular_Dosa')}</p>
            </div>
          </div>
        </div>
        <div className={scss.container_box}>
          <div className={scss.hidden__box}>
            <div className={scss.hidden__text}>
              <span className={scss.hidden__paragraph}>
                <MyButton text={t('popular_Button')} padding="20px 80px" />
              </span>
            </div>
            <img
              src="/public/img/menu/Ellipse%204.jpg"
              alt={'Ellipse'}
              className={scss.menu_img}
            />
            <div className={scss.flex}>
              <h4 className={scss.menu_img_title}>Mango Lassi</h4>
              <p className={scss.menu_img_paragraf}>{t('popular_Mango')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
