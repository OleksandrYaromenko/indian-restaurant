import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import scss from './visit.module.scss';
import Title from '../Title/Title';
export default function Visit(): JSX.Element {
  return (
    <section className={scss.container}>
      <Title text="WHY VISIT US?" />
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
                <h3 className={scss.title_swiper}>Traditional Recipes</h3>
                <p className={scss.paragraf_swiper}>
                  We proudly serve time-tested traditional Indian recipes. Every
                  ingredient used in our kitchen is carefully selected to
                  preserve the authentic taste of India. We partner with the
                  best suppliers to ensure that spices such as cardamom,
                  turmeric, coriander and garam masala are of the highest
                  quality.
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
                <h3 className={scss.title_swiper}>Warm Hospitality</h3>
                <p className={scss.paragraf_swiper}>
                  Our friendly and attentive staff ensure you feel welcome and
                  cherished from the moment you step in.
                </p>
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
                <h3 className={scss.title_swiper}>Something for Everyone</h3>
                <p className={scss.paragraf_swiper}>
                  From rich curries and fragrant biryanis to a variety of
                  vegetarian and vegan options, we cater to all taste
                  preferences
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
                <h3 className={scss.title_swiper}>Community Favorite</h3>
                <p className={scss.paragraf_swiper}>
                  Loved by locals and visitors alike, our consistent quality and
                  flavors make us a must-visit spot.
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
    </section>
  );
}
