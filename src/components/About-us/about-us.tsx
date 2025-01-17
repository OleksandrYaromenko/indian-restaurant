import scss from './about-us.module.scss';
export default function About(): JSX.Element {
  return (
    <div className={scss.container}>
      <h3 className={scss.title}>ABOUT US</h3>
      <div className={scss.paragraf_container}>
        <p className={scss.paragraf}>
          Our Indian restaurant was born out of a passion for Indian culture and
          a desire to share the richness of its culinary traditions.
        </p>
        <p className={scss.paragraf}>
          It all began with a journey to India, where the founders were
          captivated by the extraordinary harmony of flavors, aromas, and the
          heartfelt hospitality that became an integral part of their
          experience.
        </p>
        <p className={scss.paragraf}>
          Every dish we prepare today is the result of a dedicated search for
          the perfect balance between tradition and modern taste. We collaborate
          with the finest suppliers of spices and ingredients to preserve the
          authenticity of each recipe, whether it’s the legendary Chicken Tikka
          Masala, the flavorful Dal Makhani, or freshly baked Naan straight from
          the tandoor.
        </p>
      </div>
      <div className={scss.foto_cotainer}>
        <img className={scss.foto} src="/img/about/about1.jpg" alt="men" />
        <img className={scss.foto} src="/img/about/about2.jpg" alt="restoran" />
        <img className={scss.foto} src="/img/about/about3.jpg" alt="women" />
      </div>
    </div>
  );
}
