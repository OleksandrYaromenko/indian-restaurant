import Title from '../Title/Title.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import scss from './gallery.module.scss';
import { EffectCards } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function Gallery(): JSX.Element {
  const { t } = useTranslation();
  return (
    <section className={scss.section}>
      <Title text={t('gallery_Title')} />
      <div className={scss.container}>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/public/img/gallery/gallery.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/img/gallery/gallery3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/img/gallery/gallery2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/img/gallery/gallery4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/img/gallery/gallery5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
