import Title from '../../components/Title/Title.tsx';
import scss from './Deliveri.module.scss';

export function Delivery() {
  return (
    <div className={scss.container}>
      <div className={scss.container_box}>
        <Title text={'DELIVERY'} />
        <p className={scss.container_box_paragraf}>
          Taste of India with delivery and pickup!
        </p>
        <p className={scss.container_box_paragraf}>
          Enjoy authentic Indian cuisine the way you feel comfortable. We offer
          two options so that you can choose the best way to get your favorite
          treats:
        </p>
        <div>
          <a href={'https://www.ubereats.com/pl'}>
            <img src={'/public/img/uber.png'} alt="uber" />
          </a>
          <a href={'https://glovoapp.com/'}>
            <img
              src={'/public/img/glovo.png'}
              alt="glovo"
              width="130px"
              height="100px"
            />
          </a>
        </div>
        <p className={scss.container_box_paragraf}>
          Now your favorite dishes can be delivered right to your doorstep! Just
          open the Uber Eats or Glovo app, find our restaurant, select delicious
          dishes from the menu and place an order. Our chefs will quickly
          prepare your order, and the courier will deliver it hot and fresh.
        </p>
        <p className={scss.container_box_paragraf}>
          Would you prefer to pick up the food yourself? It's easy!
          <span>
            <img src="/public/img/Animation2.gif" width="70px" height="70px" />
          </span>
          Call us at 7172632660 place an order, and we will prepare it for your
          arrival. You can pick up your order at: 815 Wayne Ave, Chambersburg,
          PA 17201 All dishes will be packaged in such a way as to preserve
          their flavor and freshness.
        </p>
      </div>
    </div>
  );
}
