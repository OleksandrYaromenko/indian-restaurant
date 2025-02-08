import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import scss from './visit.module.scss';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

export default function Visit(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={scss.container}>
      <Title text={t('visit_title')} />
      <div>
        <Swiper
          cssMode={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={scss.swiper_container}>
              <div>
                <h3 className={scss.title_swiper}>{t('visit_Traditional')}</h3>
                <p className={scss.paragraf_swiper}>
                  {t('visit_Traditional_text')}
                </p>
              </div>
              <img
                src="/public/img/visit/visit1.jpg"
                alt=""
                width="560"
                height="540"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={scss.swiper_container}>
              <div>
                <h3 className={scss.title_swiper}>{t('visit_Warm')}</h3>
                <p className={scss.paragraf_swiper}>{t('visit_WarmText')}</p>
              </div>
              <img
                src="/public/img/visit/visit2.jpg"
                alt=""
                width="560"
                height="540"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={scss.swiper_container}>
              <div>
                <h3 className={scss.title_swiper}>{t('visit_Something')}</h3>
                <p className={scss.paragraf_swiper}>
                  {t('visit_SomethingText')}
                </p>
              </div>
              <img
                src="/public/img/visit/visit3.jpg"
                alt=""
                width="560"
                height="540"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={scss.swiper_container}>
              <div>
                <h3 className={scss.title_swiper}>{t('visit_Comnuity')}</h3>
                <p className={scss.paragraf_swiper}>
                  {t('visit_ComnuityText')}
                </p>
              </div>
              <img
                src="/public/img/visit/visit4.jpg"
                alt=""
                width="560"
                height="540"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
